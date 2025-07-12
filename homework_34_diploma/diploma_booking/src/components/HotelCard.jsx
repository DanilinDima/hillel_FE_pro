import placeholderImage from "../assets/logo_fake.jpg";
import {
  Box,
  Heading,
  Text,
  Link,
  Image,
  VStack,
  Button,
} from "@chakra-ui/react";

export default function HotelCard({ hotel, onSelect }) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="2xl"
      overflow="hidden"
      boxShadow="md"
      bg="white"
      maxW="sm"
      w="100%"
      display="flex"
      flexDirection="column"
      h="100%" // чтобы карточка была одинаковой высоты
    >
      <Image
        src={placeholderImage}
        alt={hotel.name}
        w="auto"
        h="200px"
        objectFit="cover"
        mx="auto"
      />

      <VStack
        align="start"
        spacing={2}
        p={4}
        flex="1" // занимает всё доступное пространство между изображением и кнопкой
      >
        <Heading fontSize="lg">{hotel.name}</Heading>
        <Text fontSize="md" color="gray.600">
          Address: {hotel.address}
        </Text>
        <Text fontSize="md" color="gray.600">
          City: {hotel.city}
        </Text>
        {hotel.phone_number && (
          <Text fontSize="sm">Phone: {hotel.phone_number}</Text>
        )}
        {hotel.hotel_rating && (
          <Text fontSize="sm">Rating: {hotel.hotel_rating}</Text>
        )}
        {hotel.website && (
          <Link
            href={hotel.website}
            isExternal
            color="orange.700"
            fontSize="sm"
          >
            Visit Website
          </Link>
        )}
      </VStack>

      <Button
        bg="orange.400"
        onClick={onSelect}
        w="100%"
        borderTopRadius={0} // чтобы не дублировать скругление снизу
      >
        Book Now
      </Button>
    </Box>
  );
}
