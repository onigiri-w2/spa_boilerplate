import { MainLayout } from "@/components/layouts/MainLayout";
import { Login } from "@/features/auth/components/Login";

export const LoginPage = () => {
  return (
    <MainLayout>
      <Login />
    </MainLayout>
  );
};
