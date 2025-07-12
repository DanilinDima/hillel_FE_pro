import {
  Box,
  Button,
  Text,
  Heading,
  VStack,
  
} from "@chakra-ui/react";
import { useNavigate, useRouteError } from "react-router";

export default function ErrorFallback() {
  const error = useRouteError();
  const navigate = useNavigate();

  const isNotFound = error?.message?.toLowerCase().includes("page not found");

  const handleClick = () => {
    if (isNotFound) {
      navigate("/");
    } else {
      window.location.reload();
    }
  };

  return (
    <Box
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      px={4}
      bg="gray.50"
    >
      <Box
        bg="orange.200"
        p={8}
        rounded="2xl"
        shadow="xl"
        maxW="400px"
        w="full"
        textAlign="center"
      >
        <VStack spacing={4}>
          <Heading size="lg">🚨 Oops! Something went wrong.</Heading>
          <Text fontSize="md" color="gray.600">
            {error?.message || "Unknown error"}
          </Text>
          <Button
            bg="orange.500"
            onClick={handleClick}
            w="full"
          >
            {isNotFound ? "Back to Main Page" : "Try Again"}
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}
