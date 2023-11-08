import { checkUsernameExist } from "@/models/user/helper";

export const usernameExist = async (username: string ) => {
  const check = await checkUsernameExist(username);
  return check && true;
};