import { useEffect, useState, useRef } from "react";
import * as Yup from "yup";
import { useBookingStore } from "../store/useBookingStore";
import {
    Box,
    Button,
    Center,
    Flex,
    Input,
    Text,
    Heading,
    SimpleGrid,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import HotelCard from "../components/HotelCard";

export default function BookingForm() {
    const {
        fetchDestinations,
        destinations,
        fetchHotels,
        hotels,
        bookHotel,
        bookedSuccess,
        setBookedSuccess,
        resetHotels,
        errors,
        resetErrors,
    } = useBookingStore();

    useEffect(() => {
        fetchDestinations();
    }, [fetchDestinations]);

    const [bookingValues, setBookingValues] = useState(null);

    const validationSchema = Yup.object({
        destination: Yup.string().required("Destination is required"),
        checkIn: Yup.date().required("Check-in is required"),
        checkOut: Yup.date()
            .required("Check-out is required")
            .min(Yup.ref("checkIn"), "Check-out must be after check-in"),
        adults: Yup.number().min(1).required(),
        children: Yup.number().min(0).required(),
    });

    const handleSubmit = (values) => {
        fetchHotels(values);
        setBookingValues(values);
    };

    const bookHotelOnClick = (hotel) => {
        const fullBooking = {
            ...bookingValues,
            hotel,
        };
        bookHotel(fullBooking);
        setBookingValues(null);
        formikRef.current?.resetForm();
    };

    const formikRef = useRef();

    return (
        <Box px={6} py={6}>
            <Formik
                innerRef={formikRef}
                enableReinitialize
                initialValues={{
                    destination: "",
                    checkIn: "",
                    checkOut: "",
                    adults: 1,
                    children: 0,
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ handleChange, handleBlur, values, errors, touched }) => {
                    useEffect(() => {
                        setBookedSuccess(false);
                        resetHotels();
                        resetErrors();
                    }, [values]);

                    return (
                        <Form>
                            <Flex
                                gap={4}
                                mb={6}
                                wrap="wrap"
                                align="flex-start"
                                justifyContent="center"
                            >
                                <Box w="200px" color={"gray.600"}>
                                    <Text mb={1} fontWeight="bold">
                                        Destination
                                    </Text>
                                    <Box
                                        as="select"
                                        name="destination"
                                        value={values.destination}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Select destination"
                                        style={{
                                            padding: "8px",
                                            border: "1px solid #ccc",
                                            borderRadius: "6px",
                                            width: "200px",
                                            height: "50px",
                                        }}
                                    >
                                        <option value="" disabled>
                                            Select destination
                                        </option>
                                        {destinations.map((dest) => (
                                            <option
                                                key={dest.id}
                                                value={dest.label}
                                            >
                                                {dest.label}
                                            </option>
                                        ))}
                                    </Box>
                                    {errors.destination &&
                                        touched.destination && (
                                            <Text
                                                color="red.500"
                                                fontSize="sm"
                                                mt={1}
                                            >
                                                {errors.destination}
                                            </Text>
                                        )}
                                </Box>

                                <Box w="180px" color={"gray.600"}>
                                    <Text mb={1} fontWeight="bold">
                                        Check In
                                    </Text>
                                    <Input
                                        type="date"
                                        name="checkIn"
                                        value={values.checkIn}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.checkIn && touched.checkIn && (
                                        <Text
                                            color="red.500"
                                            fontSize="sm"
                                            mt={1}
                                        >
                                            {errors.checkIn}
                                        </Text>
                                    )}
                                </Box>

                                <Box w="180px" color={"gray.600"}>
                                    <Text mb={1} fontWeight="bold">
                                        Check Out
                                    </Text>
                                    <Input
                                        type="date"
                                        name="checkOut"
                                        value={values.checkOut}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.checkOut && touched.checkOut && (
                                        <Text
                                            color="red.500"
                                            fontSize="sm"
                                            mt={1}
                                        >
                                            {errors.checkOut}
                                        </Text>
                                    )}
                                </Box>

                                <Box w="120px" color={"gray.600"}>
                                    <Text mb={1} fontWeight="bold">
                                        Adults
                                    </Text>
                                    <Input
                                        type="number"
                                        name="adults"
                                        min={1}
                                        value={values.adults}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.adults && touched.adults && (
                                        <Text
                                            color="red.500"
                                            fontSize="sm"
                                            mt={1}
                                        >
                                            {errors.adults}
                                        </Text>
                                    )}
                                </Box>

                                <Box w="120px" color={"gray.600"}>
                                    <Text mb={1} fontWeight="bold">
                                        Children
                                    </Text>
                                    <Input
                                        type="number"
                                        name="children"
                                        min={0}
                                        value={values.children}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.children && touched.children && (
                                        <Text
                                            color="red.500"
                                            fontSize="sm"
                                            mt={1}
                                        >
                                            {errors.children}
                                        </Text>
                                    )}
                                </Box>

                                <Box alignSelf="top" mt={7}>
                                    <Button
                                        type="submit"
                                        bg="orange.400"
                                        px={6}
                                        py={2}
                                    >
                                        Choose Hotel
                                    </Button>
                                </Box>
                            </Flex>
                        </Form>
                    );
                }}
            </Formik>
            {errors.length > 0 && (
                <Flex
      minH="50vh"
      align="center"
      justify="center"
      px={4}
      py={6}
    >
      <Box
        bg="red.50"
        border="1px solid"
        borderColor="red.300"
        borderRadius="md"
        p={6}
        maxW="600px"
        w="100%"
        textAlign="center"
      >
        {errors.map((err, idx) => (
          <Text key={idx} fontSize="xl" fontWeight="bold" color="red.600">
            {err}
          </Text>
        ))}
      </Box>
    </Flex>
            )}
            {hotels.length > 0 && (
                <Box mt={10}>
                    <Heading color="gray.600" mb={4}>
                        Select a hotel to book:
                    </Heading>

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
                </Box>
            )}
            {bookedSuccess && (
                <Center mt={6}>
                    <Heading color="green.500" fontSize="lg">
                        Booking successful!
                    </Heading>
                </Center>
            )}
        </Box>
    );
}
