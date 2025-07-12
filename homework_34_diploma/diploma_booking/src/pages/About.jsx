import { Box, Heading, Text } from "@chakra-ui/react";

export default function About() {
    return (
        <Box display="flex" justifyContent="center" px={4} py={6}>
            <Box maxW="800px" textAlign="justify">
                <Heading as="h1" size="xl" mb={4} textAlign="left">
                    About
                </Heading>
                <Text fontSize="lg" mb={4} textAlign="justify">
                    This is a booking application that allows users to book
                    appointments with various service providers. The application
                    features a user-friendly interface, secure authentication,
                    and a responsive design.
                </Text>
            </Box>
        </Box>
    );
}
