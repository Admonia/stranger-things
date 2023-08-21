import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <Link to="/SignUpForm">Signup</Link>
      <Link to="/LoginForm">Login</Link>
      {/* <Link to="/Authenticate">Authenticate</Link> */}
      <Link to="/">Home</Link> {/* Add a link to the Home route */}
      <Link to="/AllPosts">AllPosts</Link>
    </div>
  );
};

const Header = () => {
  return (
    <header id="footer">
      <nav>
        <Nav />
      </nav>
    </header>
  );
};

export default Header;


