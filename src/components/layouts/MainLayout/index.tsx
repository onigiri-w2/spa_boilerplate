import React from "react";
import { Link } from "react-router-dom";

import { Flex, Text, VStack, Container } from "@chakra-ui/react";

import { ROOT_PATH } from "@/routes/path";

type Props = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <Container p={0} maxW="50%" m="0 auto">
      <Flex minHeight="100vh" direction="column">
        <Header />
        {children}
        <Footer />
      </Flex>
    </Container>
  );
};

const Header = () => {
  return (
    <VStack bg="green.400" justifyContent="center" py={2}>
      <Text fontSize="3xl" fontWeight="bold" color="white">
        <Link to={ROOT_PATH}>TodoList</Link>
      </Text>
    </VStack>
  );
};

const Footer = () => {
  return (
    <VStack mt="auto" bg="gray.700" py={2}>
      <Text color="white">This is Footer</Text>
    </VStack>
  );
};
