import API from "./api";
import type { Chapter } from "../types";

export const getChapters = async (
  topicId: string
): Promise<Chapter[]> => {
  const res = await API.get<Chapter[]>(`/chapters/${topicId}`);
  return res.data;
};