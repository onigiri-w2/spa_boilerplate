import { RequestHandler } from "msw";
import urlJoin from "url-join";

import { TODO_API_BASE_URL } from "@/config";
import {
  FETCH_ALL_TODO_PATH,
  FETCH_ONE_TODO_PATH,
  ADD_TODO_Path,
} from "@/features/todo/api/endpoints/todo";
import type { Todo } from "@/features/todo/api/types";
import {
  PROFILE_GET_PATH,
  REGISTER_POST_PATH,
} from "@/features/user/api/endpoints/user";
import type { User } from "@/features/user/api/types";

import { get, post } from "../utils";

export const todo_handlers: Array<RequestHandler> = [
  post<Todo>(
    urlJoin(TODO_API_BASE_URL, ADD_TODO_Path),
    { id: "1", title: "todo1" },
    200
  ),
  get<Todo>(
    urlJoin(TODO_API_BASE_URL, FETCH_ONE_TODO_PATH),
    { id: "1", title: "todo1" },
    200
  ),
  get<Array<Todo>>(
    urlJoin(TODO_API_BASE_URL, FETCH_ALL_TODO_PATH),
    [
      { id: "1", title: "todo1" },
      { id: "2", title: "todo2" },
    ],
    200
  ),
  get<User>(
    urlJoin(TODO_API_BASE_URL, PROFILE_GET_PATH),
    { name: "user1", email: "email" },
    200
  ),
  post<User>(
    urlJoin(TODO_API_BASE_URL, REGISTER_POST_PATH),
    { name: "user1", email: "email" },
    200
  ),
];
