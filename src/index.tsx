import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { initMswWorker } from "@/test/msw";

import { App } from "./App";
import { setGlobalErrorHandler } from "./utils/exception/globalErrorHandler";

// グローバルエラーハンドラーを設定する。内容は未実装なので注意。
setGlobalErrorHandler();
// 開発環境ならAPIモックを有効化する。
initMswWorker();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
