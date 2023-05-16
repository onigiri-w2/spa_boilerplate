import { ApiError } from "@/api/backends/todo/types";
import {
  fetchAllTodo,
  fetchOneTodo,
  addTodo,
} from "@/features/todo/api/endpoints/todo";
import type {
  Todo,
  AddTodoRequest,
  FetchAllTodoRequest,
  FetchOneTodoRequest,
} from "@/features/todo/api/types";
import {
  useGenericMutation,
  Option as GMOption,
} from "@/hooks/reactquery/useGenericMutation";
import {
  useGenericQuery,
  Option as GQOption,
} from "@/hooks/reactquery/useGenericQuery";

const PREFIX = "/todo";
export const addTodoPath = `${PREFIX}`;
export const fetchOneTodoPath = `${PREFIX}`;
export const fetchAllTodoPath = `${PREFIX}/all`;

export const useAddTodo = (
  options?: GMOption<AddTodoRequest, ApiError, Todo, Todo>
) => {
  return useGenericMutation<AddTodoRequest, ApiError, Todo, Todo>(
    addTodo,
    options
  );
};

export const useFetchAllTodo = (
  request: FetchAllTodoRequest,
  options?: GQOption<Todo[], ApiError>
) => {
  return useGenericQuery<Todo[], ApiError>(
    ["fetchAllTdodo", request],
    () => fetchAllTodo(request),
    options
  );
};

export const useFetchOneTodo = (
  request: FetchOneTodoRequest,
  options?: GQOption<Todo, ApiError>
) => {
  return useGenericQuery<Todo, ApiError>(
    ["fetchOneTodo", request.id],
    () => fetchOneTodo(request),
    options
  );
};
