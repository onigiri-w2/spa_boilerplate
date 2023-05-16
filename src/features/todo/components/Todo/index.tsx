import { Box, Text } from "@chakra-ui/react";

type Props = {
  key: string;
  title: string;
  description: string;
};

export const Todo = ({ key, title, description }: Props) => {
  return (
    <Box key={key}>
      <Text fontSize="2xl">{title}</Text>
      <Text>{description}</Text>
    </Box>
  );
};
