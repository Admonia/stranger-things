import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AllPosts from "./AllPosts"; // Import the AllPosts component
import SignUpForm from "./SignUpForm";
import Home from "./Home";
import LoginForm from "./LoginForm"; // Adjust the path as needed
// import Authenticate from "./Authenticate";

function MainSec() {
  const [token, setToken] = useState(null); // Define the state for token

  return (
    <div id="main-section">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Pass setToken to SignUpForm and token to Authenticate */}
        <Route path="/signupform" element={<SignUpForm setToken={setToken} />} />
        <Route path="/loginform" element={<LoginForm setToken={setToken} />} />
        {/* <Route path="/authenticate" element={<Authenticate token={token} />} /> */}
        <Route path="/allposts" element={<AllPosts />} />
      </Routes>
    </div>
  );
}

export default MainSec;




// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import AllPosts from "./AllPosts"; // Import the AllPosts component 
// // import SinglePost from "./SinglePost"; // Import the SinglePost component
// import SignUpForm from "./SignUpForm";
// import Home from "./Home";
// import Authenticate from "./Authenticate";

// {/* <SignUpForm setToken={setToken} />
// <Authenticate token={token} /> */}

// function MainSec() {
//   return (
//     <div id="main-section">
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/signupform" element={<SignUpForm />} />
//         <Route path="/authenticate" element={<Authenticate />} />
//         <Route path="/allposts" element={<AllPosts />} />
//         {/* <Route path="/posts" element={<AllPosts />} /> Use the AllPosts component for the "/posts" route */}
//       </Routes>
//     </div>
//   );
// }

// export default MainSec;
