import { AuthIdToken } from "@/api/backends/todo/types";

export type User = {
  name: string;
  email: string;
};

export type UserRegisterPostResponse = User;
export type UserRegisterPostRequest = {
  name: string;
} & AuthIdToken;
export type UserProfileGetResponse = User;
export type UserProfileGetRequest = AuthIdToken;
