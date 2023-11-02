import { hashPassword } from "@/models/index.helper";
import { checkSignin } from "./queryHelper";
export const authSignIn = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    const passwordSecure = hashPassword(password)
    const result = await checkSignin({ username, password: passwordSecure });
    if (result.rowCount)
      return {
        success: true,
        data: {
          username,
          id: Number(result.rows[0].id),
        },
        message: "",
      };
    return {
      success: false,
      message: "Wrong username or password",
      data: null,
    };
  };