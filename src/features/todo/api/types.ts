import { AuthIdToken } from "@/api/backends/todo/types";

export type Todo = {
  id: string;
  title: string;
};

export type FetchAllTodoRequest = {} & AuthIdToken;
export type FetchOneTodoRequest = { id: string } & AuthIdToken;
export type AddTodoRequest = { title: string } & AuthIdToken;
