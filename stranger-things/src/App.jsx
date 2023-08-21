import React, { useState } from "react";
import './App.css'
import Nav from "./components/nav";
import MainSec from "./components/MainSec";



function App() {
  // const [token, setToken] = useState(null);

  return (
    <div id="container">
      {/* <SignUpForm setToken={setToken} />
      <Authenticate token={token} /> */}
      <Nav></Nav>
      <MainSec></MainSec>
    </div>
  );
}

     
export default App

