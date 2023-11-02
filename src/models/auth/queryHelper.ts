import { pool } from "@/config/postgres";
export const checkSignin = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    const query = {
      text: "SELECT * FROM users WHERE username = $1 AND password = $2",
      values: [username, password],
    };
    const result = await pool.query(query.text, query.values);
    return result;
  };
