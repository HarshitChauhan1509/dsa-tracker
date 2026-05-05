import API from "./api";
import type { User } from "../types";

type AuthResponse = {
  token: string;
  user: User;
};

export const login = async (data: {
  email: string;
  password: string;
}): Promise<AuthResponse> => {
  const res = await API.post("/auth/login", data);
  return res.data;
};

export const register = async (data: {
  email: string;
  password: string;
}): Promise<AuthResponse> => {
  const res = await API.post("/auth/register", data);
  return res.data;
};