/**
 * 環境変数「NODE_ENV」の値によって、挙動を変える
 * もし環境変数「NODE_ENV」がdevか未設定なら、開発環境として動作する
 * prodなら本番環境として動作する
 */
// function getEnvWithDefault(key: string, defaultValue: string): string {
//   const value = process.env[key];
//   if (value === undefined) {
//     if (process.env.NODE_ENV === "development") return defaultValue;
//     else throw new Error(`環境変数「${key}」が設定されていません`);
//   }
//   return value;
// }

function getEnv(key: string): string {
  const value = process.env[key];
  if (value === undefined) {
    throw new Error(`環境変数「${key}」が設定されていません`);
  }
  return value;
}

//-------------------------------//
// 以下に環境変数を追加していく
//-------------------------------//

export const TODO_API_ORIGIN = getEnv("REACT_APP_TODO_API_ORIGIN");
