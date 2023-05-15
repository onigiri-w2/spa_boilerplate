import { Button, Text, VStack } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";

import { loginWithGoogle } from "../../functions";

type Props = {
  width?: string;
};

export const Login = ({ width = "100%" }: Props) => {
  const handleClick = () => {
    loginWithGoogle();
  };
  return (
    <VStack w={width} spacing={4} p={4}>
      <Text textAlign="center" fontSize="lg" fontWeight="bold">
        ログイン
      </Text>
      <Button
        leftIcon={<FcGoogle size={16} />}
        variant="outline"
        onClick={handleClick}
        minW={260}
      >
        <Text color="gray.700">Google で続ける</Text>
      </Button>
      <Text fontSize="14px">
        まだ登録してない方も、上記ボタンから登録できます。
      </Text>
    </VStack>
  );
};
