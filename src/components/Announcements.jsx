import { Container, Heading, HStack } from "@chakra-ui/react";
import React from "react";
import AnnouncementCard from "./AnnouncementCard";
import asset20 from "../assets/asset20.png";
import asset21 from "../assets/asset21.png";
import asset22 from "../assets/asset22.png";
import asset23 from "../assets/asset23.jpg";
import asset24 from "../assets/asset24.jpg";

const Announcements = () => {
  const events = [
    {
      id: 1,
      name: "Web Dev Workshop",
      image: asset20,
      description:
        "This MERN stack web development workshop covers building full-stack web applications using MongoDB, Express, React, and Node.js. Participants will learn to create, read, update, and delete (CRUD) operations, build APIs, and integrate front-end and back-end systems. The workshop includes hands-on exercises and project-based learning.",
      date: "Apr 25, 2024",
      organiser: "Shan Deekala",
    },
    {
      id: 2,
      name: "App Dev Bootcamp",
      image: asset21,
      description:
        "Exciting Kotlin bootcamp for app development offers intensive training for developers of all levels. Participants learn Kotlin language fundamentals, Android app architecture, and best practices. The program includes hands-on projects, lectures, and coding exercises to build functional Android apps.",
      date: "Apr 31, 2024",
      organiser: "Tanay Dubey",
    },
    {
      id: 3,
      name: "Expert Talk on Blockchain",
      image: asset22,
      description:
        "An expert talk on blockchain covers the fundamentals of this decentralized technology. Topics include blockchain architecture, consensus mechanisms, and applications in finance, healthcare, and supply chains. The expert also discusses challenges, opportunities, and future trends.",
      date: "May 9, 2024",
      organiser: "Arpita Gupta",
    },
    {
      id: 4,
      name: "Workshop on UI-UX",
      image: asset23,
      description:
        "A UI/UX workshop focuses on enhancing user interface and user experience design skills. Participants engage in hands-on activities, learn from experts, and collaborate on projects to create intuitive and visually appealing digital interfaces for optimal user interaction.",
      date: "May 22, 2024",
      organiser: "James Clive",
    },
    {
      id: 5,
      name: "Tech Fest",
      image: asset24,
      description:
        "The LPU Tech Fest showcases cutting-edge innovations and a competitive spirit among students and industry leaders, featuring robotics, coding competitions, and interactive workshops, fostering a hub of creativity and technological advancements in a vibrant academic environment.        ",
      date: "May 29, 2024",
      organiser: "LPU Enthuse",
    },
  ];
  return (
    <div id="work" style={{ paddingBlock: "30px" }}>
      <Container maxW={"container.xl"}>
        <Heading
          textAlign={"center"}
          color="#ffa51e"
          fontFamily="Poppins"
          fontWeight="400"
          fontSize="2.5rem"
        >
          Upcoming Events & Workshops
        </Heading>
        <HStack
          wrap={"wrap"}
          justifyContent={"space-evenly"}
          marginBlock={"20px"}
        >
          {events.map((i) => (
            <AnnouncementCard
              key={i.id}
              id={i.id}
              name={i.name}
              image={i.image}
              description={i.description}
              date={i.date}
              organiser={i.organiser}
            />
          ))}
        </HStack>
      </Container>
    </div>
  );
};

export default Announcements;
