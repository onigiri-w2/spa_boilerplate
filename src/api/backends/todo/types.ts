import { AxiosError } from "axios";

export type AuthIdToken = {
  authIdToken: string;
};

/**
 * エラー系
 */
// 全APIのエラーレスポンスの型を定義する
export type ErrorResponse = {
  details: {
    code: string;
    msg: string;
  }[];
};

// エラーレスポンスを包む型
export type ApiError = AxiosError<ErrorResponse>;
