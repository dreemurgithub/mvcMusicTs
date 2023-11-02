import dotenv from "dotenv";
dotenv.config();
import { regexPassword, regexUserName } from "@/validations/index.constants";
import { pool } from "@/config/postgres";
import { checkUsername } from "./queryHelper";

const errorUserCheck = async ({
  name,
  password,
  username,
  id,
}: {
  name: string;
  password: string;
  username: string;
  id?: number;
}) => {
  if (!name || !username || !password)
    return {
      success: false,
      message: "Missing display name/username/name/password",
    };
  if (!regexUserName.test(username))
    return {
      success: false,
      message: "This is not an name",
    };
  if (!regexPassword.test(password))
    return {
      success: false,
      message:
        "Password contain atleast 5 characters, a number, a lowercase and uppercase",
    };
  return { success: true, message: "", data: null };
};

const checkUsernameExist = async (username: string) => {
  const count = await checkUsername(username)
  if (count) return { success: true, message: "", data: null };
  return {
    success: false,
    message: "This username is already taken",
  };
};
export { errorUserCheck, checkUsernameExist };
