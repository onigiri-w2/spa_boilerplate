/**
 * このアプリで発生し、どこにもキャッチされなかったエラーをキャッチする。
 * キャッチしても回復処理はせずに、サーバーにエラー情報を送信するのみ。
 * 理由：一元的な回復処理はできないため。
 *
 * Note:
 *    まだサーバーにエラー情報を送信する処理は実装していない。
 */
export const setGlobalErrorHandler = () => {
  window.onerror = function (
    errorMessage,
    filePath,
    rowNumber,
    columnNumber,
    errorObject
  ) {
    // console.warn(errorMessage);
    // sendLog(new Log());
  };
};
