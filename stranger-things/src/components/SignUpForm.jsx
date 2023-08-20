import React, { useState } from 'react';
import authenticate from './authenticate'; // Update the path accordingly

const COHORT_NAME = "2306-ghp-et-web-ft-sf";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const registerUser = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username,
            password
          }
        })
      });
      const result = await response.json();
      return result;
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const registrationResult = await registerUser();

    if (registrationResult) {
      if (registrationResult.success) {
        setError('');

        // Now, attempt to authenticate the user after successful registration
        const authenticationResult = await authenticate(username, password);

        if (authenticationResult.success) {
          console.log('User registered and authenticated successfully:', authenticationResult);
          // Handle successful registration and authentication here
        } else {
          setError(authenticationResult.error.message);
        }
      } else {
        setError(registrationResult.error.message);
      }
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;






