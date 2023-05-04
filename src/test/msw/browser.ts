/**
 * mswについてはリンク（https://mswjs.io/docs/）を参照。
 */
import { setupWorker } from "msw";
import { handlers } from "./handlers";

export const worker = setupWorker(...handlers);
