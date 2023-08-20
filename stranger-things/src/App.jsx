import React, { useState } from "react";
// import AllPosts from "./components/AllPosts";
import './App.css'
// import Post from "./components/Post";
import Nav from "./components/nav";
import MainSec from "./components/MainSec";
// import SignUpForm from "./components/SignUpForm";
// import Authenticate from "./components/Authenticate";

function App() {
  return (
    <div id="container">
      <Nav></Nav>
      <MainSec></MainSec>
    </div>
  );
}

     
export default App

// function App() {
//   const [token, setToken] = useState(null);

//   return (
//     <div>
//       {/* <SignUpForm setToken={setToken} />
//       <Authenticate token={token} /> */}
//      <Nav />
//       <AllPosts />
//    <Post />
//     </div>
//   );
// }

// export default App