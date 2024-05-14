// import { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Box,
//   Button,
//   Container,
//   HStack,
//   Heading,
//   Input,
//   VStack,
//   Text,
// } from "@chakra-ui/react";
// import Message from "./Message";
// import { app } from "../firebase";
// import "../App.css";
// // import { getAuth } from "firebase/auth";
// import {
//   getFirestore,
//   addDoc,
//   collection,
//   serverTimestamp,
//   onSnapshot,
//   query,
//   orderBy,
// } from "firebase/firestore";
// import { toast } from "react-hot-toast";
// import asset17 from "../assets/asset17.jpg";

// // const auth = getAuth(app);
// const db = getFirestore(app);

// function PrivateChannel() {
//   const [user, setUser] = useState(true);
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [database, setDatabase] = useState("");
//   const [department, setDepartment] = useState("");

//   const divForScroll = useRef(null);
//   const navigate = useNavigate();

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     if (message === "") {
//       toast("Message can't be empty.", {
//         icon: "⚠️",
//       });
//       return;
//     }

//     try {
//       await addDoc(collection(db, database), {
//         text: message,
//         name: window.localStorage.getItem("name"),
//         createdAt: serverTimestamp(),
//       });
//       setMessage("");

//       divForScroll.current.scrollIntoView({ behavior: "smooth" });
//     } catch (error) {
//       alert(error);
//     }
//   };

//   useEffect(() => {
//     const data = window.localStorage.getItem("token");
//     if (data === null) setUser(false);
//     else {
//       const dept = window.localStorage.getItem("department");
//       setDepartment(dept);
//     }
//   }, []);

//   return (
//     <Box w={"100vw"}>
//       {user ? (
//         <Container
//           h={"100vh"}
//           bg={"white"}
//           maxW={"container.xl"}
//           borderRadius={"20px"}
//           filter="drop-shadow(0 0 0.5rem #fcf0d4)"
//           display={"flex"}
//           justifyContent={"center"}
//           alignItems={"center"}
//         >
//           <HStack
//             h="90vh"
//             w="90vw"
//             borderRadius={"20px"}
//             boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px"
//             backgroundColor={"#ffdaa3"}
//           >
//             <VStack
//               w={"30vw"}
//               h={"90vh"}
//               borderRadius={"20px 0 0 20px"}
//             ></VStack>
//             <VStack
//               h="90vh"
//               w="70vw"
//               padding={"4"}
//               backgroundImage={asset17}
//               backgroundSize={"contain"}
//               borderRadius={"0px 20px 20px 0"}
//             >
//               <VStack h="full" w={"full"}>
//                 <div ref={divForScroll}></div>
//               </VStack>
//               <form style={{ width: "100%" }}>
//                 <HStack>
//                   <Input
//                     value={message}
//                     borderRadius={"20px"}
//                     onChange={(e) => setMessage(e.target.value)}
//                     placeholder="Enter a Message..."
//                     backgroundColor={"rgba(255,255,255, 0.2)"}
//                     border="1.5px solid #ffa51e"
//                   />
//                   <Button className="btn btn1" type="submit">
//                     Send
//                   </Button>
//                 </HStack>
//               </form>
//             </VStack>
//           </HStack>
//         </Container>
//       ) : (
//         navigate("/login", { replace: true })
//       )}
//     </Box>
//   );
// }

// export default PrivateChannel;
