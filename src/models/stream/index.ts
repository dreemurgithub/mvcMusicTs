import { streamMusic } from "./helper";
const streamFile = async (id: string) => {
  const file = await streamMusic(id);
  return file;
};
