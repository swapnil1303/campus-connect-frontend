import React from "react";
import { HStack, Avatar, Text, VStack } from "@chakra-ui/react";
import asset18 from "../assets/asset18.png";
import asset19 from "../assets/asset19.png";

const Message = ({ user = "other", message}) => {
  
  return (
    <HStack alignSelf={user === "me" ? "flex-end" : "flex-start"}>
      {user === "other" && <Avatar src={asset18} />}
      <VStack alignItems={user === "me" ? "flex-end" : "flex-start"}>
        <Text color={"grey"} fontSize={"0.8rem"}>
          {message?.name} , {new Date(message?.createdAt?.seconds * 1000).toDateString()}
        </Text>
        <Text
          borderRadius={"10px"}
          bg={user === "me" ? "#ffa51e" : "#ffffff"}
          color={user === "me" ? "#ffffff" : "grey"}
          paddingY={"2"}
          paddingX={user === "me" ? "4" : "2"}
          maxWidth={"60vw"}
        >
          {message?.text}
        </Text>
      </VStack>
      {user === "me" && <Avatar src={asset19} />}
    </HStack>
  );
};

export default Message;
