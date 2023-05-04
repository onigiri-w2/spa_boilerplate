export const initMswWorker = () => {
  if (process.env.NODE_ENV !== "development") return;
  const { worker } = require("./browser");
  worker.start();
  return worker;
};

// export const initMswServer = () => {
//   if (process.env.NODE_ENV !== "development") return;
//   const { server } = require("./server");
//   server.listen();
//   return server;
// };
