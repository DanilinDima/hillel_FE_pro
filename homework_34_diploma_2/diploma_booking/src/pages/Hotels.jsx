import {
    Box,
    Heading,
    SimpleGrid,
    Link as ChakraLink,
    Button,
    Flex,
} from "@chakra-ui/react";
import HotelCard from "../components/HotelCard";
import { useBookingStore } from "../store/useBookingStore";

export default function Hotels() {
    const {
        hotels,
        bookHotel,
        bookedSuccess,
        bookingValues,
        resetBookingValues,
        errors,
    } = useBookingStore();

    const bookHotelOnClick = (hotel) => {
        const fullBooking = {
            ...bookingValues,
            hotel,
        };
        bookHotel(fullBooking);
        console.log("Booking details:", fullBooking);
        console.log("Booking values:", bookingValues);
        resetBookingValues();
        console.log("Booking values:", bookingValues);
    };

    return (
        <Box mt={10} mx="auto" maxW="1200px" px={4}>
            {!bookedSuccess && (
                <Heading color="gray.600" mb={4}>
                    Select a hotel to book:
                </Heading>
            )}

            <SimpleGrid
                columns={[1, 2, 3, 4]}
                spacing={6}
                columnGap={6}
                rowGap={10}
            >
                {hotels.map((hotel) => (
                    <HotelCard
                        key={hotel.id}
                        hotel={hotel}
                        onSelect={bookHotelOnClick.bind(null, hotel)}
                    />
                ))}
            </SimpleGrid>
            {bookedSuccess && (
                <Flex
                    gap={4}
                    mb={6}
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                >
                    <Heading color="green.500" fontSize="lg">
                        Booking successful!
                    </Heading>

                    <ChakraLink href="/" color="orange.500" fontSize="lg">
                        <Button bg="orange.400" size="sm">
                            Back to Main Page
                        </Button>
                    </ChakraLink>
                </Flex>
            )}
            {errors.map((err, idx) => (
                <Text key={idx} fontSize="xl" fontWeight="bold" color="red.600">
                    {err}
                </Text>
            ))}
        </Box>
    );
}
