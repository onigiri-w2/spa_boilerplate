import type { ApiError } from "@/api/backends/todo/types";
import {
  useGenericMutation,
  Option as GMOption,
} from "@/hooks/reactquery/useGenericMutation";
import {
  useGenericQuery,
  Option as GQOption,
} from "@/hooks/reactquery/useGenericQuery";

import { profileGet, registerPost } from "../endpoints/user";
import { User, UserProfileGetRequest, UserRegisterPostRequest } from "../types";

export const useProfileGet = (
  request: UserProfileGetRequest,
  options?: GQOption<User, ApiError>
) => {
  return useGenericQuery<User, ApiError>(
    ["profileGet"],
    () => profileGet(request),
    options
  );
};

export const useRegisterPost = (
  options?: GMOption<UserRegisterPostRequest, ApiError, User, User>
) => {
  return useGenericMutation<UserRegisterPostRequest, ApiError, User, User>(
    registerPost,
    options
  );
};
