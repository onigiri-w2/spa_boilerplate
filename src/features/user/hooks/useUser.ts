import { useProfileGet, useRegisterPost } from "../api/reactquery/user";
import { getIdToken } from "@/features/auth/functions";

export const useUser = (uid?: string) => {
  // TODO: ここおかしいので修正、authIdTokenに適切な値を与えれるようにしないと。
  // ていうかこれもうuid必要なくなってしまってないか...？w
  // このままだと、キャッシュが残ることによってセキュリティイシュー起きる気がする。
  // useProfileGetのクエリキーを変える必要があるかも。
  const {
    data,
    isError,
    error,
    isLoading: isLoadingGetProfile,
  } = useProfileGet({ authIdToken: "" });
  const { mutate: registerPost, isLoading: isLoadingRegsiterPost } =
    useRegisterPost();

  async function registerUser(name: string) {
    if (isError && error?.status === 404) {
      const idToken = await getIdToken();
      registerPost({ name, authIdToken: idToken || "" });
    }
  }

  return {
    user: data,
    registerUser,
    isLoading: isLoadingGetProfile && isLoadingRegsiterPost,
  };
};
