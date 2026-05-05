import API from "./api";
import type { Problem } from "../types";

export const getProblems = async (
  chapterId: string
): Promise<Problem[]> => {
  const res = await API.get<Problem[]>(`/problems/${chapterId}`);
  return res.data;
};