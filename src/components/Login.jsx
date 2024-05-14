import React from "react";
import {
  Button,
  Container,
  Text,
  HStack,
  Img,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import asset13 from "../assets/asset13.png";
import asset14 from "../assets/asset14.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const url="https://campus-connect-backend-nuc0.onrender.com";
  const [show, setShow] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();
  const handleClick = () => setShow(!show);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${url}/login`, {
        username,
        password,
      });
      console.log(data);
      if (data.success === false) {
        toast.error(data.message);
      } else {
        window.localStorage.setItem("token", data.token);
        window.localStorage.setItem("name", data.name);
        window.localStorage.setItem("department", data.department);
        toast.success(data.message);
        navigate("/");
      }
    } catch (error) {
      toast.error("Some error occured.");
      console.log(error);
    }
  };

  return (
    <Container maxW={"Container.xl"} height={"100vh"}>
      <VStack>
        <Img src={asset13} alt="logo" height={"30vh"} />
        <HStack height={"70vh"}>
          <Img src={asset14} alt="logo" width={"40vw"} />
          <VStack width={"40vw"}>
            <form
              onSubmit={submitHandler}
              style={{
                border: "1px solid #E2E8F0",
                borderRadius: "15px",
                padding: "40px 30px",
                width: "100%",
              }}
            >
              <Input
                variant="outline"
                placeholder="Enter Registration Number"
                marginBottom={"20px"}
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <br />
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Button mt={4} variant="outline" type="submit" className="btn1">
                Submit
              </Button>
              <Text mt={"10px"} fontSize={"0.9rem"} color={"#bfc2c7"}>
                New User ?{" "}
                <Link to={"/signup"}>
                  <span color="blue">Sign Up here</span>
                </Link>{" "}
              </Text>
            </form>
          </VStack>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Login;
