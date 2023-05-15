import { useNavigate } from "react-router-dom";

export const ROOT_PATH = "/";

export const TODO_PATH = "/todo";
export const useNavigateToSearch = () => {
  const navigate = useNavigate();
  return () => {
    navigate({
      pathname: TODO_PATH,
    });
  };
};

export const LOGIN_PATH = "/login";
export const useNavigateToLogin = () => {
  const navigate = useNavigate();
  return () =>
    navigate({
      pathname: LOGIN_PATH,
    });
};

/**
 * パラメータ付きのnaviateは以下のように書く
 */
// import { createSearchParams } from "react-router-dom";
// export const SEARCH_PATH = "/search";
// export const useNavigateToSearch = () => {
//   const navigate = useNavigate();
//   return (word: string) => {
//     navigate({
//       pathname: SEARCH_PATH,
//       search: createSearchParams({ q: word }).toString(),
//     });
//   };
// };
