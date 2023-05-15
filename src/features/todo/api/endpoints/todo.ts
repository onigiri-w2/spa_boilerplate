import { todoApiBase } from "@/api/backends/todo/baseAxios";
import type {
  Todo,
  FetchAllTodoRequest,
  FetchOneTodoRequest,
  AddTodoRequest,
} from "@/features/todo/api/types";

const PREFIX = "/todo";
export const ADD_TODO_Path = `${PREFIX}`;
export const FETCH_ONE_TODO_PATH = `${PREFIX}`;
export const FETCH_ALL_TODO_PATH = `${PREFIX}/all`;

export const addTodo = async ({ title, authIdToken }: AddTodoRequest) => {
  const { data } = await todoApiBase.post<Todo>(
    `${PREFIX}`,
    { title: title },
    { headers: { Authorization: `Bearer ${authIdToken}` } }
  );
  return data;
};

export const fetchAllTodo = async (request: FetchAllTodoRequest) => {
  const { data } = await todoApiBase.get<Array<Todo>>(`${PREFIX}/all`, {
    headers: {
      Authorization: `Bearer ${request.authIdToken}`,
    },
  });
  return data;
};

export const fetchOneTodo = async (request: FetchOneTodoRequest) => {
  const { data } = await todoApiBase.get<Todo>(`${PREFIX}`, {
    params: { id: request.id },
    headers: {
      Authorization: `Bearer ${request.authIdToken}`,
    },
  });
  return data;
};
