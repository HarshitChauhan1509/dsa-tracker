import API from "./api";
import type { Topic } from "../types";

export const getTopics = async (): Promise<Topic[]> => {
  const res = await API.get<Topic[]>("/topics");
  return res.data;
};