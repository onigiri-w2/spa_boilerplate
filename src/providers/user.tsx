import React, { createContext, useEffect, useMemo } from "react";

import { User } from "@/features/user/api/types";
import { useUser } from "@/features/user/hooks/useUser";

import { useAuthContext } from "./auth";

type ProviderProps = {
  children: React.ReactNode;
};
type AuthContextType = {
  user?: User;
  registerUser: (name: string) => void;
};

export const UserContext = createContext<AuthContextType>({
  registerUser: () => {},
});
export const UserProvider = ({ children }: ProviderProps) => {
  const { authUser, isLogin } = useAuthContext();
  const { user, registerUser, isLoading } = useUser(authUser?.uid);

  const display = useMemo(() => {
    if (isLogin && user) return true;
    if (!isLogin) return true;
    return false;
  }, [isLogin, user]);

  useEffect(() => {
    if (!isLogin) return;
    if (!isLoading && !user) {
      registerUser(authUser?.name ? authUser.name : "noname");
      console.log("register");
    }
  }, [isLogin, isLoading, user]);

  return (
    <UserContext.Provider value={{ user, registerUser }}>
      {display && children}
    </UserContext.Provider>
  );
};
export const useUserContext = () => React.useContext(UserContext);
