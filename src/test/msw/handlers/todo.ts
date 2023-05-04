import { RequestHandler } from "msw";

import { get, post } from "../utils";
import { API_BASE_URL } from "api/todo/base";
import {
  fetchAllTodoPath,
  fetchOneTodoPath,
  addTodoPath,
} from "api/todo/endpoints/todo";
import { Todo } from "api/todo/types";
import urlJoin from "url-join";

export const todo_handlers: Array<RequestHandler> = [
  post<Todo>(
    urlJoin(API_BASE_URL, addTodoPath),
    { id: "1", title: "todo1" },
    200
  ),
  get<Todo>(
    urlJoin(API_BASE_URL, fetchOneTodoPath),
    { id: "1", title: "todo1" },
    200
  ),
  get<Array<Todo>>(
    urlJoin(API_BASE_URL, fetchAllTodoPath),
    [
      { id: "1", title: "todo1" },
      { id: "2", title: "todo2" },
    ],
    200
  ),
];
