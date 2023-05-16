import { Navigate, useRoutes } from "react-router-dom";

import { useAuthContext } from "@/providers/auth";

import { LoginPage } from "../pages/LoginPage";
import { TodoPage } from "../pages/TodoPage";

import { LOGIN_PATH, TODO_PATH } from "./path";

export const AppRoutes = () => {
  const { isLogin } = useAuthContext();

  const privateRoute = [
    { path: TODO_PATH, element: <TodoPage /> },
    { path: "*", element: <Navigate to={TODO_PATH} /> },
  ];
  const publicRoute = [
    { path: LOGIN_PATH, element: <LoginPage /> },
    { path: "*", element: <Navigate to={LOGIN_PATH} /> },
  ];
  let routes = isLogin ? privateRoute : publicRoute;

  const element = useRoutes([...routes]);

  return <>{element}</>;
};
