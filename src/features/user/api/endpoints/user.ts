import { todoApiBase } from "@/api/backends/todo/baseAxios";

import type {
  UserRegisterPostResponse,
  UserProfileGetResponse,
  UserProfileGetRequest,
  UserRegisterPostRequest,
} from "../types";

const PREFIX = "/user";
export const REGISTER_POST_PATH = `${PREFIX}`;
export const PROFILE_GET_PATH = `${PREFIX}/profile`;

export const registerPost = async (request: UserRegisterPostRequest) => {
  const { data } = await todoApiBase.post<UserRegisterPostResponse>(
    REGISTER_POST_PATH,
    { name: request.name },
    {
      headers: {
        Authorization: `Bearer ${request.authIdToken}`,
      },
    }
  );
  return data;
};

export const profileGet = async (request: UserProfileGetRequest) => {
  const { data } = await todoApiBase.get<UserProfileGetResponse>(
    PROFILE_GET_PATH,
    {
      headers: {
        Authorization: `Bearer ${request.authIdToken}`,
      },
    }
  );
  return data;
};
