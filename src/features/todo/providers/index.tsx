import { createContext, useState, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchAllTodo } from "@/features/todo/api/endpoints/todo";

type TodoProviderType = {
  children: React.ReactNode;
};

const TodoContext = createContext({});
export const TodoProvider = ({ children }: TodoProviderType) => {
  const { data, isLoading, refetch } = useQuery(["fetchAllTodo"], () =>
    fetchAllTodo({ authIdToken: "token" })
  );
  const [reload, setReload] = useState(false);
  function exeReload() {
    setReload(!reload);
  }

  return (
    <TodoContext.Provider value={{ data, exeReload, isLoading, refetch }}>
      {children}
    </TodoContext.Provider>
  );
};

export function useTodoContext() {
  return useContext(TodoContext);
}
