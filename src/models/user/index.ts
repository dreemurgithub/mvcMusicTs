import { hashPassword } from "@/models/index.helper";
import { errorUserCheck,checkUsernameExist } from "./errorCheck";
import { addUserQuery, editUserQuery } from "./queryHelper";
const makeUser = async ({
  password,
  username,
  name,
}: {
  password: string;
  username: string;
  name: string;
}) => {
  const checkError = await errorUserCheck({ name, password, username });
  if (!checkError.success) return checkError;
  const checkUsernameErr = await checkUsernameExist(username);
  if (!checkUsernameErr.success) return checkUsernameErr;

  const passwordSecure = hashPassword(password);
  const result = await addUserQuery({
    name,
    password: passwordSecure,
    username,
  });
  if (result.rowCount)
    return {
      success: true,
      data: { name, username },
      message: "",
    };

  return {
    success: false,
    message: "Something wrong",
    data: null,
  };
};
const editUser = async ({
  password,
  username,
  id,
  name,
}: {
  password: string;
  username: string;
  id: number;
  name: string;
}) => {
  const checkError = await errorUserCheck({ name, password, username });
  if (!checkError.success) return checkError;

  const passwordSecure = hashPassword(password);

  const result = await editUserQuery({
    name,
    password: passwordSecure,
    id,
    username,
  });
  if (result.rowCount)
    return {
      success: true,
      data: {
        name,
        username,
        id,
      },
      message: "",
    };
  return {
    success: false,
    message: "Something wrong",
    data: null,
  };
};

export { editUser, makeUser };
