import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { RootErrorBoundary } from "./utils/exception/RootErrorBoundary";
import { ChakraProvider } from "@chakra-ui/react";
import { setGlobalErrorHandler } from "./utils/exception/globalErrorHandler";
import { BrowserRouter } from "react-router-dom";
import { initMswWorker } from "test/msw";

// TODO: グローバルcssのプラクティスを勉強して適用する。
import "./index.css";

// グローバルエラーハンドラーを設定する。内容は未実装なので注意。
setGlobalErrorHandler();

// 開発環境ならAPIモックを有効化する。
initMswWorker();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <ChakraProvider>
      <RootErrorBoundary>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </RootErrorBoundary>
    </ChakraProvider>
  </StrictMode>
);
