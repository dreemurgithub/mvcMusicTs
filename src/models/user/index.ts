import { hashPassword } from "@/config/helper/hashPassword";
import { errorUserCheck, checkUsernameExist } from "./errorCheck";
import {
  addUserHelper,
  deleteUserHelper,
  editUserHelper,
  readUserHelper,
} from "./helper";
export const makeUser = async ({
  password,
  username,
  name,
}: {
  password: string;
  username: string;
  name: string;
}) => {
  const passwordSecure = hashPassword(password);
  const result = await addUserHelper({
    name,
    password: passwordSecure,
    username,
  });
  if (result.success)
    return {
      success: true,
      data: result.data,
      message: "",
    };

  return {
    success: false,
    message: "Something wrong",
    data: null,
  };
};
export const editUser = async ({
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
  const passwordSecure = hashPassword(password);

  const result = await editUserHelper({
    name,
    password: passwordSecure,
    username,
    id
  });
  if (result.success)
    return {
      success: true,
      data: result.data,
      message: "",
    };
  return {
    success: false,
    message: "Something wrong",
    data: null,
  };
};

export const deleteUser = async (id: number) => {
  const result = await deleteUserHelper(id);
  return result;
};
