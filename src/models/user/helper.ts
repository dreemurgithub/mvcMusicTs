import { userRepository } from "@/config/database/typeorm";
import { Userinfor } from "@/config/database/typeorm/user";

export const readUserIdHelper = async (id: number)=>{
  const user = await userRepository.findOne({where: {id}}) 
  return user;
}

export const readUserHelper = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const signinUser = await userRepository.findOne({
    where: { username, password },
  });
  if (!signinUser) return { success: false, message: "Wrong email/password" };
  return { success: true, data: signinUser };
};

export const addUserHelper = async ({
  username,
  password,
  name,
}: {
  username: string;
  password: string;
  name: string;
}) => {
  const checkUsername = await userRepository.findOne({ where: { username } });
  if (checkUsername) return { success: false, message: "Username exist" };
  const newUser = new Userinfor();
  newUser.username = username;
  newUser.password = password;
  newUser.name = name;
  await userRepository.save(newUser);
  return { success: true, data: newUser };
};

export const checkUsernameExist = async (username: string) => {
  const allUser = await userRepository.find();
  const userExist = await userRepository.findOne({ where: { username } });
  return userExist && true;
};

export const editUserHelper = async ({
  username,
  password,
  name,
  id,
}: {
  username: string;
  password: string;
  name: string;
  id: number;
}) => {
  const updateUser = await userRepository.findOne({ where: { username, id } });
  if (!updateUser) return { success: false, message: "Bad Request" };
  updateUser.password = password;
  updateUser.name = name;
  await userRepository.save(updateUser);
  if (!updateUser) return { success: false, message: "Bad Request" };
  return { success: true, data: updateUser };
};

export const deleteUserHelper = async (id: number) => {
  try {
    const result = await userRepository.delete({ id });
    return { success: true, message: "Successfully delete" };
  } catch(err) {
    if(err)console.log(err)
    return { success: false, message: "UnAuthorize" };
  }
};
