import { useRoutes } from "react-router-dom";

import { Dashboard } from "pages/Dashboard";
import { ROOT_PATH } from "./route_path";

export const AppRoutes = () => {
  const commonRoutes = [{ path: ROOT_PATH, element: <Dashboard /> }];

  const element = useRoutes([...commonRoutes]);

  return <>{element}</>;
};
