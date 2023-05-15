import { UseQueryOptions, useQuery, QueryKey } from "@tanstack/react-query";

export type Option<TQueryFnData, TError, TData = TQueryFnData> = Omit<
  UseQueryOptions<TQueryFnData, TError, TData, QueryKey>,
  "queryKey" | "queryFn"
>;

export const useGenericQuery = <TQueryFnData, TError, TData = TQueryFnData>(
  queryKey: QueryKey,
  fetcher: () => Promise<TQueryFnData>,
  options?: Option<TQueryFnData, TError, TData>
) => {
  return useQuery({
    queryKey,
    queryFn: async () => fetcher(),
    ...options,
  });
};
