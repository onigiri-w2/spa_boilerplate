import React, { createContext } from "react";

import { useAuth } from "@/features/auth/hooks/useAuth";
import { AuthUser } from "@/features/auth/types";

type ProviderProps = {
  children: React.ReactNode;
};

type AuthContextType = {
  isLogin: boolean;
  authUser: AuthUser | undefined;
};

export const AuthContext = createContext<AuthContextType>({
  isLogin: false,
  authUser: undefined,
});
export const AuthProvider = ({ children }: ProviderProps) => {
  const { isLoading, isLogin, authUser } = useAuth();
  return (
    <AuthContext.Provider value={{ isLogin, authUser }}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};
export const useAuthContext = () => React.useContext(AuthContext);
