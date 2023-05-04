import React from "react";

import { Stack, Text } from "@chakra-ui/react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";

type Props = {
  children: React.ReactNode;
};

/**
 * 配下のコンポーネントで発生したエラーをキャッチする。
 * キャッチしたら、エラーページを表示する。
 * また、エラーの情報をどこかのサーバーに送信する。（必要なら）
 */
export const RootErrorBoundary = ({ children }: Props) => {
  // const handleError = useCallback(
  //   (error: Error, info: { componentStack: string }) => {
  //     sendLog(new Log());
  //   },
  //   []
  // );

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  );
};

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <Stack h={window.innerHeight} justifyContent="center" alignItems="center">
      <Text fontSize="4xl" fontWeight="bold">
        Something went wrong.
      </Text>
      <Text>すみません、何らかの問題が発生しました。再度お試しください。</Text>
    </Stack>
  );
};
