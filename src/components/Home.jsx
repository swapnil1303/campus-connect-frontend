import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
  Container,
  Heading,
  HStack,
  Img,
  Text,
  VStack,
  Button,
  Box,
} from "@chakra-ui/react";
import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillYoutube,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FaCircleArrowRight } from "react-icons/fa6";
import { HiExternalLink } from "react-icons/hi";
import axios from "axios";
import toast from "react-hot-toast";
import asset1 from "../assets/asset1.png";
import asset2 from "../assets/asset2.png";
import asset3 from "../assets/asset3.png";
import asset4 from "../assets/asset4.png";
import asset5 from "../assets/asset5.png";
import asset6 from "../assets/asset6.png";
import asset7 from "../assets/asset7.png";
import asset8 from "../assets/asset8.png";
import asset9 from "../assets/asset9.png";
import asset10 from "../assets/asset10.png";
import asset11 from "../assets/asset11.png";
import asset12 from "../assets/asset12.png";
import asset16 from "../assets/asset16.svg";

const Home = () => {
  const name = window.localStorage.getItem("name");
  const navigate = useNavigate();
  const url="https://campus-connect-backend-nuc0.onrender.com"
  const logoutHandle = async () => {
    try {
      const { data } = await axios.get(`${url}/logout`);
      console.log(data);

      window.localStorage.removeItem("token");
      window.localStorage.removeItem("name");
      window.localStorage.removeItem("department");
      toast.success("Logged out successfully.");
      navigate("/");
    } catch (error) {
      toast.error("Some error occured.");
      console.log(error);
    }
  };

  return (
    <>
      <div>
        {/* Nav Bar */}
        <HStack
          width={"100%"}
          justifyContent={"space-between"}
          height={"15vh"}
          paddingInline={"30px"}
        >
          <HStack>
            <HStack>
              <Img src={asset1} alt="logo" />
            </HStack>
            <Text color={"#757474"} fontSize={"22px"} fontWeight={"500"}>
              Campus Connect
            </Text>
          </HStack>
          <HStack gap={"35px"}>
            <Link to="/" className="link">
              Home
            </Link>
            <Link to="/announcements" className="link">
              Announcements
            </Link>
            <HashLink to="#features" className="link">
              Features
            </HashLink>
            <HashLink to="#contact" className="link">
              Contact Us
            </HashLink>

            {name == null ? (
              <Link to="/signup">
                <Button className="btn">Sign Up</Button>
              </Link>
            ) : (
              <p className="username">{name.toUpperCase()}</p>
            )}
            {name == null ? (
              <Link to="/login">
                <Button className="btn">Log In</Button>
              </Link>
            ) : (
              <Button className="btn" onClick={logoutHandle}>
                Log Out
              </Button>
            )}
          </HStack>
        </HStack>

        {/* Hero Section */}
        <HStack height={"85vh"} justifyContent={"space-evenly"}>
          <VStack
            width={"50vw"}
            justifyContent={"space-evenly"}
            alignItems={"flex-start"}
            marginInline={"30px"}
          >
            <Heading fontSize={"4rem"} fontWeight={400} lineHeight={"70px"}>
              Welcome to <br />
              Campus <span style={{ color: "#ffa51e" }}> Connect </span>
            </Heading>
            <Text>
              Where Students Come Together to Share, Learn, and Succeed
              Experience the Power of Campus Connect!
            </Text>
            <HashLink to="#features">
              <Button className="btn btn1">Learn More</Button>
            </HashLink>
          </VStack>
          <Img src={asset2} width={"40vw"} alt="image" />
        </HStack>

        {/* Toggle Bar */}
        <Box id={"features"}>
          <HStack justifyContent={"space-evenly"}>
            <HashLink to="#announcements" className="toggle-link">
              Announcements
            </HashLink>
            <HashLink to="#community" className="toggle-link">
              Community
            </HashLink>
            <HashLink to="#channels" className="toggle-link">
              Channels
            </HashLink>
            <HashLink to="#resourcce" className="toggle-link">
              Resource
            </HashLink>
            <HashLink to="#safety" className="toggle-link">
              Safety
            </HashLink>
            <HashLink to="#notifications" className="toggle-link">
              Notifications
            </HashLink>
          </HStack>
        </Box>

        {/* Announcements */}
        <Container maxW={"container.xl"} id="announcements">
          <Text color={"#521F14"} fontWeight={"700"} marginBottom={"20px"}>
            Announcements
          </Text>
          <Heading fontSize={"2.5rem"} fontWeight={500}>
            Campus Updates, Stay Informed,
            <span style={{ color: "#ffa51e" }}> Stay Connected </span>
          </Heading>
          <Text fontSize={"0.9rem"} marginBottom={"50px"}>
            Explore our announcements section to stay connected and informed
            about all the latest news, events, and important updates. <br />{" "}
            This is your go-to resource for staying up-to-date with everything
            that matters in your college experience.
          </Text>

          <HStack
            height={"85vh"}
            justifyContent={"space-evenly"}
            id="community"
          >
            <Img src={asset3} width={"45vw"} alt="image" />
            <VStack
              width={"40vw"}
              justifyContent={"space-evenly"}
              alignItems={"flex-start"}
            >
              <Heading fontSize={"2rem"} fontWeight={500}>
                Latest Updates
              </Heading>
              <Text textAlign={"justify"}>
                Stay in the know with the most recent developments, events, and
                initiatives happening within our college community. From
                exciting campus news to important announcements, this is your
                hub for staying informed and connected.
              </Text>
            </VStack>
          </HStack>

          <HStack height={"85vh"} justifyContent={"space-evenly"}>
            <VStack
              width={"40vw"}
              justifyContent={"space-evenly"}
              alignItems={"flex-start"}
            >
              <Heading fontSize={"2rem"} fontWeight={500}>
                Upcoming Events
              </Heading>
              <Text textAlign={"justify"}>
                Explore the exciting events happening on campus and beyond! From
                guest lectures to workshops, social gatherings to career fairs,
                there's always something happening to enrich your college
                experience. Browse the upcoming events below and plan your
                schedule accordingly. Don't miss out on the opportunities to
                connect, learn, and engage with your college community!
              </Text>
            </VStack>
            <Img src={asset4} width={"45vw"} alt="image" />
          </HStack>

          <Heading
            fontSize={"2rem"}
            fontWeight={500}
            textAlign={"center"}
            marginBlock={"120px"}
          >
            Discover the full suite of features designed to enhance your <br />{" "}
            college experience and streamline your journey towards success!
          </Heading>

          <HStack justifyContent={"space-evenly"} id="channels">
            <VStack
              border={"1px solid #919191"}
              borderRadius={"40px"}
              width={"35vw"}
              alignItems={"flex-start"}
            >
              <Img src={asset6} width={"35vw"} alt="image" />
              <Heading
                color={"#521F14"}
                fontWeight={"500"}
                fontSize={"1.4rem"}
                paddingInline={"30px"}
                textAlign={"justify"}
              >
                Public Channel
              </Heading>
              <Text paddingInline={"30px"} textAlign={"justify"}>
                Share your thoughts, ideas, and announcements with the entire
                community. From campus events to study group invitations, the
                public channel is the wider audience and foster community
                spirit..
              </Text>
              <HStack
                padding={"10px 30px"}
                width={"100%"}
                justifyContent={"flex-end"}
              >
                <Link to="/public-channel" rel="noopener noreferrer">
                  <FaCircleArrowRight size={"50px"} color={"#ffa51e"} />
                </Link>
              </HStack>
            </VStack>

            <VStack
              border={"1px solid #919191"}
              borderRadius={"40px"}
              width={"35vw"}
              alignItems={"flex-start"}
            >
              <Img src={asset5} width={"35vw"} alt="image" />
              <Heading
                color={"#521F14"}
                fontWeight={"500"}
                fontSize={"1.4rem"}
                paddingInline={"30px"}
                textAlign={"justify"}
              >
                Private Channel
              </Heading>
              <Text paddingInline={"30px"} textAlign={"justify"}>
                Engage in one-on-one conversations with other members of the
                community. Connect with classmates, discuss assignments, or seek
                advice from mentors in a private and secure environment.
              </Text>
              <HStack
                padding={"10px 30px"}
                width={"100%"}
                justifyContent={"flex-end"}
              >
                <Link to="/private-channel" rel="noopener noreferrer">
                <FaCircleArrowRight size={"50px"} color={"#ffa51e"} />
                </Link>
              </HStack>
            </VStack>
          </HStack>

          <Text textAlign={"center"} marginBlock={"60px 160px"}>
            Join the conversation, build meaningful connections, and unlock the
            full potential of our vibrant community today!
          </Text>
        </Container>

        {/* Resource */}
        <Container maxW={"container.xl"} id="resourcce">
          <Text color={"#521F14"} fontWeight={"700"} marginBottom={"20px"}>
            Resource
          </Text>
          <Heading fontSize={"2.5rem"} fontWeight={500}>
            Media Hub:
            <span style={{ color: "#ffa51e" }}>
              {" "}
              Share, Discover and Learn{" "}
            </span>{" "}
            Together!
          </Heading>
          <Text fontSize={"0.9rem"} marginBottom={"50px"}>
            Explore our announcements section to stay connected and informed
            about all the latest news, events, and important updates. <br />{" "}
            This is your go-to resource for staying up-to-date with everything
            that matters in your college experience.
          </Text>

          <HStack justifyContent={"space-evenly"} marginBottom={"50px"}>
            <Img
              src={asset7}
              width={"20vw"}
              alt="image"
              paddingInline={"30px"}
            />
            <Text textAlign={"justify"} width={"60vw"}>
              Share audio files seamlessly within our community platform,
              whether it's privately between students, publicly to the entire
              community, or directly with professors, facilitating efficient
              collaboration and knowledge exchange.
            </Text>
          </HStack>
          <HStack justifyContent={"space-evenly"} marginBottom={"50px"}>
            <Img
              src={asset8}
              width={"20vw"}
              alt="image"
              paddingInline={"30px"}
            />
            <Text textAlign={"justify"} width={"60vw"}>
              Easily exchange video content across our platform, enabling
              private sharing between students, public sharing within the
              community, and direct distribution to professors, fostering
              enhanced communication and learning opportunities.
            </Text>
          </HStack>
          <HStack justifyContent={"space-evenly"} marginBottom={"50px"}>
            <Img
              src={asset9}
              width={"20vw"}
              alt="image"
              paddingInline={"30px"}
            />
            <Text textAlign={"justify"} width={"60vw"}>
              Effortlessly distribute PDFs and various files throughout our
              platform, allowing for private sharing among students, public
              dissemination within the community, and direct access for
              professors, ensuring seamless information exchange and
              collaboration.
            </Text>
          </HStack>
          <HStack justifyContent={"space-evenly"} marginBottom={"150px"}>
            <Img
              src={asset10}
              width={"20vw"}
              alt="image"
              paddingInline={"30px"}
            />
            <Text textAlign={"justify"} width={"60vw"}>
              Engage the community through interactive polling features,
              enabling students to participate in private polls, contribute to
              public surveys, and provide valuable feedback directly to
              professors, promoting active participation and informed
              decision-making.
            </Text>
          </HStack>
        </Container>

        {/* Safety */}
        <Container maxW={"container.xl"} marginBottom={"150px"} id="safety">
          <HStack justifyContent={"space-between"}>
            <VStack alignItems={"flex-start"}>
              <Text color={"#521F14"} fontWeight={"700"} marginBottom={"20px"}>
                Safety
              </Text>
              <Heading fontSize={"2.5rem"} fontWeight={500} width={"60vw"}>
                Ensuring Your Safety:{" "}
                <span style={{ color: "#ffa51e" }}>
                  Protecting Your Data and Our Site
                </span>
              </Heading>
              <Text fontSize={"0.9rem"}>
                In our dedicated Security Section, we prioritize your digital
                safety with the utmost seriousness. Here, you'll find
                comprehensive guides, tips, and updates on the latest security
                measures to safeguard your personal data and transactions.
                Together, let's build a safer digital environment, one click at
                a time.
              </Text>
            </VStack>
            <Img src={asset11} width="25vw" alt="image" />
          </HStack>
        </Container>

        {/* Notifications */}
        <Container
          maxW={"container.xl"}
          marginBottom={"150px"}
          id="notifications"
        >
          <HStack justifyContent={"space-between"}>
            <Img src={asset12} width="25vw" alt="image" />
            <VStack alignItems={"flex-start"}>
              <Text color={"#521F14"} fontWeight={"700"} marginBottom={"20px"}>
                Notifications
              </Text>
              <Heading fontSize={"2.5rem"} fontWeight={500} width={"60vw"}>
                Stay Updated:{" "}
                <span style={{ color: "#ffa51e" }}>
                  Your Gateway to Important Alerts and Announcements
                </span>
              </Heading>
              <Text fontSize={"0.9rem"}>
                Your hub for the latest updates and important announcements.
                Stay informed about new features, promotions, and important news
                relevant to you. Check back regularly to ensure you never miss
                out on any crucial information.
              </Text>
            </VStack>
          </HStack>
        </Container>
      </div>

      {/* Footer Section */}
      <Box
        background={"#521F14"}
        color={"#ffffff"}
        padding={"50px"}
        id="contact"
      >
        <VStack>
          <HStack justifyContent={"space-between"} width={"90vw"}>
            <Img src={asset16} width={"150px"} />
            <HStack>
              <Link
                to="https://www.youtube.com/user/LPUuniversity"
                target="blank"
                rel="noopener noreferrer"
              >
                <AiFillYoutube size={30} color={"#ffffff"} />
              </Link>

              <Link
                to="https://twitter.com/lpuuniversity"
                target="blank"
                rel="noopener noreferrer"
              >
                <AiFillTwitterCircle size={30} color={"#ffffff"} />
              </Link>
              <Link
                to="https://www.instagram.com/lpuuniversity/"
                target="blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram size={30} color={"#ffffff"} />
              </Link>
              <Link
                to="https://www.linkedin.com/school/lovely-professional-university/"
                target="blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin size={30} color={"#ffffff"} />
              </Link>
              <Link
                to="https://www.facebook.com/LPUUniversity"
                target="blank"
                rel="noopener noreferrer"
              >
                <AiFillFacebook size={30} color={"#ffffff"} />
              </Link>
            </HStack>
          </HStack>

          <hr height={"2px"} color={"#ffffff"} width="100%" />

          <HStack paddingTop={"40px"}>
            <VStack width={"22vw"} alignItems={"flex-start"}>
              <Text fontSize={"1.5rem"}>More about us</Text>
              <HStack fontSize={"0.8rem"}>
                <Text>Security & Complain </Text>
                <HiExternalLink />
              </HStack>
              <HStack fontSize={"0.8rem"}>
                <Text>Privacy Policy</Text>
                <HiExternalLink />
              </HStack>
              <HStack fontSize={"0.8rem"}>
                <Text> Security Policy </Text>
                <span>
                  <HiExternalLink />
                </span>
              </HStack>
            </VStack>
            <VStack width={"22vw"} alignItems={"flex-start"}>
              <Text fontSize={"1.5rem"}>Email Address</Text>
              <HStack fontSize={"0.8rem"}>
                <Text>lppunjab@lpu.org</Text> <HiExternalLink />
              </HStack>
              <HStack fontSize={"0.8rem"}>
                <Text>careers@lpu.org</Text> <HiExternalLink />
              </HStack>
              <HStack fontSize={"0.8rem"}>
                <Text>admissioncell@lpu.org</Text> <HiExternalLink />
              </HStack>
            </VStack>
            <VStack width={"22vw"} alignItems={"flex-start"}>
              <Text fontSize={"1.5rem"}>Contact Us</Text>
              <Text fontSize={"0.8rem"}>Tel: +91-1824-517000</Text>
              <Text fontSize={"0.8rem"}>Tel: +91-1824-404404</Text>
              <Text fontSize={"0.8rem"}>Tel: +91-1824-404405</Text>
            </VStack>
            <VStack width={"22vw"} alignItems={"flex-start"}>
              <Text fontSize={"1.5rem"}>Locate Us</Text>
              <Text fontSize={"0.8rem"} fontWeight={"600"}>
                Lovely Professional University
              </Text>
              <Text fontSize={"0.8rem"}>Jalandhar-Delhi, G.T. Road,</Text>
              <Text fontSize={"0.8rem"}>Phagwara, Punjab, IN, 144411.</Text>
            </VStack>
          </HStack>
        </VStack>
      </Box>
    </>
  );
};

export default Home;
