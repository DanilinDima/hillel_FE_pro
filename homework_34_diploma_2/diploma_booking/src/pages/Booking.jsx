import { useEffect, useRef } from "react";
import * as Yup from "yup";
import { useBookingStore } from "../store/useBookingStore";
import { Box, Button, Flex, Input, Text, Heading } from "@chakra-ui/react";
import { Formik, Form } from "formik";

import { useNavigate } from "react-router";

export default function BookingForm() {
    const {
        fetchDestinations,
        destinations,
        fetchHotels,
        setBookedSuccess,
        resetHotels,
        errors,
        resetErrors,
        setBookingValues,
        resetBookingValues,
    } = useBookingStore();

    const navigate = useNavigate();

    useEffect(() => {
        fetchDestinations();
        resetBookingValues();
    }, [fetchDestinations, resetBookingValues]);

    const validationSchema = Yup.object({
        destination: Yup.string().required("Destination is required"),
        checkIn: Yup.date().required("Check-in is required"),
        checkOut: Yup.date()
            .required("Check-out is required")
            .min(Yup.ref("checkIn"), "Check-out must be after check-in"),
        adults: Yup.number().min(1).required(),
        children: Yup.number().min(0).required(),
    });

    const handleSubmit = async (values) => {
        const result = await fetchHotels(values);
        if (result.length > 0) {
            setBookingValues(values);
            navigate("/hotels");
        }
    };

    const formikRef = useRef();

    return (
        <Box px={6} py={6} maxW="1200px" mx="auto">
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
                                justifyContent="space-between"
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
            <Box maxW="1200px" mx="auto" textAlign="left" mt={6}>
                <Heading as="h2" size="xl" mb={2}>
                    Travel With{" "}
                    <Text as="span" color="orange.400" display="inline">
                        Booking
                    </Text>
                </Heading>
                <Text fontSize="md" color="gray.600">
                    Plan your next trip with ease and confidence. Discover
                    top-rated hotels in your dream destinations and enjoy a
                    seamless booking experience tailored just for you.
                </Text>
            </Box>
            {errors.length > 0 && (
                <Flex minH="50vh" align="center" justify="center" px={4} py={6}>
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
                            <Text
                                key={idx}
                                fontSize="xl"
                                fontWeight="bold"
                                color="red.600"
                            >
                                {err}
                            </Text>
                        ))}
                    </Box>
                </Flex>
            )}
        </Box>
    );
}
