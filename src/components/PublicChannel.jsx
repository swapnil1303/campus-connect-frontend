import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  HStack,
  Input,
  VStack,
  Text,
} from "@chakra-ui/react";
import Message from "./Message";
import { app } from "../firebase";
import "../App.css";
// import { getAuth } from "firebase/auth";
import {
  getFirestore,
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import { toast } from "react-hot-toast";
import asset17 from "../assets/asset17.jpg";

// const auth = getAuth(app);
const db = getFirestore(app);

function PublicChannel() {
  const [user, setUser] = useState(true);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [database, setDatabase] = useState("");
  const [department, setDepartment] = useState("");

  const divForScroll = useRef(null);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (message === "") {
      toast("Message can't be empty.", {
        icon: "⚠️",
      });
      return;
    }

    try {
      await addDoc(collection(db, database), {
        text: message,
        name: window.localStorage.getItem("name"),
        createdAt: serverTimestamp(),
      });
      setMessage("");

      divForScroll.current.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    const data = window.localStorage.getItem("token");
    if (data === null) setUser(false);
    else {
      const dept = window.localStorage.getItem("department");
      setDepartment(dept);

      let q;
      if (dept === "Computer Science") {
        setDatabase("csMessages");
        q = query(collection(db, "csMessages"), orderBy("createdAt", "asc"));
      } else if (dept === "Information Technology") {
        setDatabase("itMessages");
        q = query(collection(db, "itMessages"), orderBy("createdAt", "asc"));
      } else if (dept === "Electronics and Communication") {
        setDatabase("ecMessages");
        q = query(collection(db, "ecMessages"), orderBy("createdAt", "asc"));
      } else if (dept === "Mechanical") {
        setDatabase("mecMessages");
        q = query(collection(db, "mecMessages"), orderBy("createdAt", "asc"));
      } else if (dept === "Electrical") {
        setDatabase("eleMessages");
        q = query(collection(db, "eleMessages"), orderBy("createdAt", "asc"));
      } else if (dept === "Civil") {
        setDatabase("cvlMessages");
        q = query(collection(db, "cvlMessages"), orderBy("createdAt", "asc"));
      }

      // const unsubscribe = onAuthStateChanged(auth, (data) => {
      //   setUser(data);
      //   console.log(data);
      // });

      const unsubscribeForMessage = onSnapshot(q, (snap) => {
        setMessages(
          snap.docs.map((item) => {
            const id = item.id;
            return { id, ...item.data() };
          })
        );
      });

      return () => {
        // unsubscribe();
        unsubscribeForMessage();
      };
    }
  }, []);

  return (
    <Box w={"100vw"}>
      {user ? (
        <Container
          h={"100vh"}
          bg={"white"}
          maxW={"container.xl"}
          borderRadius={"20px"}
          filter="drop-shadow(0 0 0.5rem #fcf0d4)"
        >
          <Text
            height={"10vh"}
            textAlign={"center"}
            paddingTop={"2vh"}
            fontSize={"1.7rem"}
            fontWeight={"500"}
            color={"#ffa51e"}
            textShadow={"0px 2px #dedfe0"}
          >
            {department} Public Channel
          </Text>
          <VStack
            h="85vh"
            padding={"4"}
            borderRadius={"20px"}
            backgroundImage={asset17}
            backgroundSize={"contain"}
            boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px"
          >
            <VStack
              h="full"
              w={"full"}
              overflowY="auto"
              css={{
                "&::-webkit-scrollbar": {
                  width: "10px",
                },
                "&::-webkit-scrollbar-track": {
                  background: "#fcf0d4",
                  borderRadius: "10px",
                  cursor: "pointer",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "#ffa51e",
                  borderRadius: "10px",
                  cursor: "pointer",
                },
              }}
            >
              {messages.map((item) => (
                <Message
                  key={item.id}
                  user={
                    item.name === window.localStorage.getItem("name")
                      ? "me"
                      : "other"
                  }
                  message={item}
                />
              ))}

              <div ref={divForScroll}></div>
            </VStack>

            <form onSubmit={submitHandler} style={{ width: "100%" }}>
              <HStack>
                <Input
                  value={message}
                  borderRadius={"20px"}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter a Message..."
                  backgroundColor={"rgba(255,255,255, 0.2)"}
                  border="1.5px solid #ffa51e"
                />
                <Button className="btn btn1" type="submit">
                  Send
                </Button>
              </HStack>
            </form>
          </VStack>
        </Container>
      ) : (
        navigate("/login", { replace: true })
      )}
    </Box>
  );
}

export default PublicChannel;
