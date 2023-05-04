import Axios from "axios";
import { TODO_API_ORIGIN } from "config";

export const API_BASE_URL = new URL("/api/v1", TODO_API_ORIGIN).toString();

export const todoApiBase = Axios.create({
  baseURL: API_BASE_URL,
});
