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
  Select,
} from "@chakra-ui/react";
import asset13 from "../assets/asset13.png";
import asset15 from "../assets/asset15.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const url = "https://campus-connect-backend-nuc0.onrender.com";
  const [show, setShow] = React.useState(false);
  const [name, setName] = React.useState("");
  const [department, setDepartment] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();
  const handleClick = () => setShow(!show);

  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const { data } = await axios.post(
  //       `${url}/signup`,
  //       {
  //         department,
  //         username,
  //         email,
  //       }
  //     );
  //     console.log(data);
  //     if (data.success === false) {
  //       toast.error(data.message);
  //     } else {
  //       const { data } = await axios.post(`${url}/signup`, {
  //         name,
  //         department,
  //         username,
  //         email,
  //         password,
  //       });
  //       if (data.success === false) {
  //         toast.error(data.message);
  //       } else {
  //         window.localStorage.setItem("token", data.token);
  //         window.localStorage.setItem("name", data.name);
  //         window.localStorage.setItem("department", data.department);
  //         toast.success(data.message);
  //         navigate("/");
  //       }
  //     }
  //   } catch (error) {
  //     toast.error("Some error occured.");
  //   }
  // };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${url}/signup`, {
        name,
        department,
        username,
        email,
        password,
      });

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
      // Log the actual error message for debugging
      console.error(error.message);
      toast.error("An error occurred while signing up. Please try again.");
    }
  };

  return (
    <Container maxW={"Container.xl"} height={"100vh"}>
      <VStack>
        <Img src={asset13} alt="logo" height={"30vh"} />
        <HStack height={"70vh"} gap={"50px"}>
          <Img src={asset15} alt="logo" width={"30vw"} height={"70vh"} />
          <VStack width={"40vw"}>
            <form
              // onSubmit={submitHandler}
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
                placeholder="Enter Name"
                marginBottom={"20px"}
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <Select
                required
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option hidden style={{ color: "#ababab" }}>
                  Select Department
                </option>
                <option value="Computer Science">Computer Science</option>
                <option value="Information Technology">
                  Information Technology
                </option>
                <option value="Electronics and Communication">
                  Electronics and Communication
                </option>
                <option value="Mechanical">Mechanical</option>
                <option value="Electrical">Electrical</option>
                <option value="Civil">Civil</option>
              </Select>
              <style>
                {`select::placeholder { 
                  color: crimson; 
                }`}
              </style>
              <br />
              <Input
                variant="outline"
                placeholder="Enter Registration Number"
                marginBottom={"20px"}
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <br />
              <Input
                variant="outline"
                placeholder="Enter Email"
                marginBottom={"20px"}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                Already have an account ?{" "}
                <Link to={"/login"}>
                  <span color="blue">Login here</span>
                </Link>{" "}
              </Text>
            </form>
          </VStack>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Signup;
