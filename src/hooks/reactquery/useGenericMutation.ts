import { UseMutationOptions, useMutation } from "@tanstack/react-query";

export type Option<TVariables, TError, TData, TContext> = UseMutationOptions<
  TData | void,
  TError,
  TVariables,
  TContext
>;

export const useGenericMutation = <TVariables, TError, TData, TContext>(
  fetcher: (params: TVariables) => Promise<TData | void>,
  options?: Option<TVariables, TError, TData, TContext>
) => {
  return useMutation(
    async (params: TVariables) => {
      return await fetcher(params);
    },
    { ...options }
  );
};
