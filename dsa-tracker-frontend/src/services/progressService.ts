import API from "./api";
import type { Progress } from "../types";

export const getProgress = async (): Promise<Progress[]> => {
  const res = await API.get<Progress[]>("/progress");
  return res.data;
};

export const updateProgress = async (data: {
  problemId: string;
  completed: boolean;
}) => {
  const res = await API.post("/progress", data);
  return res.data;
};