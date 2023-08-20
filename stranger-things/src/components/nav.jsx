import { Link } from "react-router-dom";
// import SignUpForm from "./SignUpForm";
// import Authenticate from "./Authenticate";

export default function Nav() {
  return (
    <div>
   <Link to="/SignUpForm">Signup</Link>
   <Link to="/LoginForm">Login</Link>
   {/* <Link to="/Authenticate">Authenticate</Link> */}
      <Link to="/">Home</Link> {/* Add a link to the Home route */}
      <Link to="/AllPosts">AllPosts</Link>
    </div>
  );
}