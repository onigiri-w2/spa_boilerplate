import { useGenericQuery, Option } from "@/hooks/reactquery/useGenericQuery";
import { fetchAllTodo, fetchOneTodo } from "@/features/todo/api/endpoints/todo";
import type {
  Todo,
  FetchAllTodoRequest,
  FetchOneTodoRequest,
} from "@/features/todo/api/types";
import type { ApiError } from "@/api/backends/todo/types";

export const useFetchAllTodo = (
  request: FetchAllTodoRequest,
  options?: Option<Todo[], ApiError>
) => {
  return useGenericQuery<Todo[], ApiError>(
    ["fetchAllTdodo", request],
    () => fetchAllTodo(request),
    options
  );
};

export const useFetchOneTodo = (
  request: FetchOneTodoRequest,
  options?: Option<Todo, ApiError>
) => {
  return useGenericQuery<Todo, ApiError>(
    ["fetchOneTodo", request.id],
    () => fetchOneTodo(request),
    options
  );
};
