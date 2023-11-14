import { hashPassword } from "@/config/helper/hashPassword";
import {
  addUserHelper,
  deleteUserHelper,
  editUserHelper,
  readUserIdHelper
} from "./helper";

export const readUserId =async (id:number) => {
  const data = await readUserIdHelper(id)
  if(data) return {
    success: true,
    data: {  id: data.id,username: data.username,name: data.name}
  } 
  else return {success: false, message:"No user with this id"}
}

export const makeUser = async ({
  password,
  username,
  name,
  avatar
}: {
  password: string;
  username: string;
  name: string;
  avatar: string;
}) => {
  const passwordSecure = hashPassword(password);
  const result = await addUserHelper({
    name,
    password: passwordSecure,
    username,
    avatar
  });
  if (result.success)
    return {
      success: true,
      data: result.data,
      message: "",
    };

  return {
    success: false,
    message: "Something wrong -test",
    data: null,
  };
};
export const editUser = async ({
  password,
  username,
  id,
  name,
  avatar
}: {
  password: string;
  username: string;
  id: number;
  name: string;
  avatar: string;
}) => {
  const passwordSecure = hashPassword(password);

  const result = await editUserHelper({
    name,
    password: passwordSecure,
    username,
    id,
    avatar
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
