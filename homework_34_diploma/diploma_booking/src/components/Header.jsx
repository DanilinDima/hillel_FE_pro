
import {
    Box,
    Flex,
    Text,
    Button,
    Spacer,
    HStack,
    Circle,
    Link as ChakraLink,
} from "@chakra-ui/react";

const Header = () => {
    return (
        <Box
            bg="white"
            px={6}
            py={4}
            shadow="md"
            borderBottom="1px solid #e2e8f0"
            marginBottom={5}
        >
            <Flex align="center">
                <HStack spacing={3} mr="3">
                    <Circle size="50px" bg="orange.400" />
                    <Text fontSize="2xl" fontWeight="bold" color="orange.500">
                        Booking
                    </Text>
                </HStack>

                <Spacer />

                <HStack spacing={3}>
                    <ChakraLink href="/" color="orange.500" fontSize="lg">
                        <Button bg="orange.400" size="sm">
                            Home
                        </Button>
                    </ChakraLink>
                    <ChakraLink href="/about" color="orange.500" fontSize="lg">
                        <Button bg="orange.400" size="sm">
                            About
                        </Button>
                    </ChakraLink>
                </HStack>
            </Flex>
        </Box>
    );
};

export default Header;
