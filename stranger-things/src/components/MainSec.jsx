import React from "react";
import { Routes, Route } from "react-router-dom";
import AllPosts from "./AllPosts"; // Import the AllPosts component 
// import SinglePost from "./SinglePost"; // Import the SinglePost component
import SignUpForm from "./SignUpForm";
import Home from "./Home";
import Authenticate from "./Authenticate";

function MainSec() {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signupform" element={<SignUpForm />} />
        <Route path="/authenticate" element={<Authenticate />} />
        <Route path="/AllPosts" element={<AllPosts />} />
        {/* <Route path="/posts" element={<AllPosts />} /> Use the AllPosts component for the "/posts" route */}
      </Routes>
    </div>
  );
}

export default MainSec;
