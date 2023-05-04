import { todoApiBase } from "../base";
import { Todo } from "../types";

const PREFIX = "/todo";
export const addTodoPath = `${PREFIX}`;
export const fetchOneTodoPath = `${PREFIX}`;
export const fetchAllTodoPath = `${PREFIX}/all`;

export const addTodo = async (title: string, authIdToken: string) => {
  return todoApiBase.post<Todo>(
    `${PREFIX}`,
    { title: title },
    { headers: { Authorization: `Bearer ${authIdToken}` } }
  );
};

export const fetchAllTodo = async (authIdToken: string) => {
  return todoApiBase.get<Array<Todo>>(`${PREFIX}/all`, {
    headers: {
      Authorization: `Bearer ${authIdToken}`,
    },
  });
};

export const fetchOneTodo = async (id: string, authIdToken: string) => {
  return todoApiBase.get<Todo>(`${PREFIX}`, {
    params: { id: id },
    headers: {
      Authorization: `Bearer ${authIdToken}`,
    },
  });
};
