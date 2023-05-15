import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

import { MediaQueryProvider } from "@/styles/MediaQuery";
import theme from "@/styles/theme";
import { RootErrorBoundary } from "@/utils/exception/RootErrorBoundary";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { AuthProvider } from "./auth";
import { UserProvider } from "./user";

type Props = {
  children: React.ReactNode;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      // suspense: true, // ここでsuspenseモードを全体で有効化する
      // suspenceとreact-queryの関係を理解してから有効化する
    },
  },
});

export const AppProvider = ({ children }: Props) => {
  return (
    <HelmetProvider>
      <ChakraProvider theme={theme}>
        <MediaQueryProvider>
          <RootErrorBoundary>
            <BrowserRouter>
              <QueryClientProvider client={queryClient}>
                <AuthProvider>
                  <UserProvider>{children}</UserProvider>
                </AuthProvider>
              </QueryClientProvider>
            </BrowserRouter>
          </RootErrorBoundary>
        </MediaQueryProvider>
      </ChakraProvider>
    </HelmetProvider>
  );
};
