/**
 * 参考: https://zenn.dev/microcms/articles/76e903bc5a1aa2?redirected=1#usemutation
 * Usageもこのリンク見てちょっとずつ理解していこう...w
 */
import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

export type Option<TVariables, TError, TData, TContext> = UseMutationOptions<
  TData | void,
  TError,
  TVariables,
  TContext
>;

export const useOptimisticMutation = <TVariables, TError, TData, TContext>(
  queryKey: [string, Record<string, unknown>?],
  fetcher: (params: TVariables) => Promise<TData | void>,
  updater?: (oldData: TContext, newData: TVariables) => TContext,
  options?: Omit<
    UseMutationOptions<TData | void, TError, TVariables, TContext>,
    "onMutate" | "onError" | "onSettled"
  >
) => {
  const queryClient = useQueryClient();

  return useMutation(
    async (params) => {
      return await fetcher(params);
    },
    {
      // mutationが開始したタイミングで実行
      onMutate: async (variables) => {
        // 事前に走っているリクエストがある場合はキャンセルする
        await queryClient.cancelQueries(queryKey);

        // 更新前の現在のデータを取得
        const previousData = queryClient.getQueryData<TContext>(queryKey);

        // 送信予定のデータと更新用の関数を使ってキャッシュデータを更新する
        // ここでUI上のデータは仮のデータに書き換えられる
        if (previousData && updater) {
          queryClient.setQueryData<TContext>(queryKey, () => {
            return updater(previousData, variables);
          });
        }

        // データ取得前のデータを返す
        return previousData;
      },
      // APIへの更新が失敗した場合に旧データでロールバックする
      // contextはonMutateで返したデータ
      onError: (err, _, context) => {
        queryClient.setQueryData(queryKey, context);
        console.warn(err);
      },
      // すべての処理が終了した際にキャッシュを更新する
      // APIから取得成功した場合は仮のデータから取得したデータに更新
      // 失敗した場合は旧データに更新
      onSettled: () => {
        queryClient.invalidateQueries(queryKey);
      },
      ...options,
    }
  );
};
