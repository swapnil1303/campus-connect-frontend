import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Announcements from "./components/Announcements";
import PublicChannel from "./components/PublicChannel";
// import PrivateChannel from "./components/PrivateChannel";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="announcements" element={<Announcements />} />
        <Route path="public-channel" element={<PublicChannel />} />
        {/* <Route path="private-channel" element={<PrivateChannel />} /> */}
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
