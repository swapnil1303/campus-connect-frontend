import React from "react";
import { VStack, Img, Text, HStack, Heading } from "@chakra-ui/react";

const AnnouncementCard = ({
  id,
  name,
  image,
  description,
  date,
  organiser,
}) => {
  return (
    <VStack
      w={"30vw"}
      h={"80vh"}
      border={"1px solid #e0e0e0"}
      margin={"20px"}
      bgColor={"#ffffff"}
      padding={"15px"}
      alignItems={"center"}
      gap={"20px"}
      filter={"drop-shadow(0 0 0.25rem #cfc7c6)"}
    >
      <Img
        src={image}
        h={"200px"}
        alt={"product-image"}
        cursor={"pointer"}
        transition={"all 0.5s"}
        _hover={{ transform: "scale(1.02)" }}
      />
      <VStack justifyContent={"space-between"} h={"full"}>
        <Heading
          fontSize={"1.2rem"}
          color={"#ffa51e"}
          fontWeight={"600"}
          letterSpacing={"1px"}
        >
          {name}
        </Heading>
        <Text fontSize={"14px"} textAlign={"justify"} paddingInline={"4"}>
          {description}
        </Text>
        <HStack justifyContent={"space-between"} width={"90%"}>
          <Text fontWeight={"600"} color={"#ffa51e"}>
            {date}
          </Text>
          <Text fontWeight={"600"} color={"#ffa51e"}>
            {organiser}
          </Text>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default AnnouncementCard;
