import { useEffect, useMemo, useState } from "react";

import { auth } from "@/lib/firebase";

import { AuthUser } from "../types";

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [authUser, setAuthUser] = useState<AuthUser>();
  const isLogin = useMemo(() => authUser !== undefined, [authUser]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setAuthUser(
        user
          ? {
              uid: user.uid,
              email: user.email || undefined,
              name: user.displayName || undefined,
            }
          : undefined
      );
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);
  return { authUser, isLoading, isLogin };
};
