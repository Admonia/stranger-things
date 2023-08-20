import React, { useState } from 'react';

const COHORT_NAME = "2306-ghp-et-web-ft-sf";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const login = async () => {
    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
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
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
    }
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    const loginResult = await login();

    if (loginResult) {
      if (loginResult.success) {
        setError('');
        console.log('User logged in successfully:', loginResult);
        // Handle successful login here
      } else {
        setError(loginResult.error.message);
      }
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleLoginSubmit}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;



// import React, { useState } from 'react';
// import authenticate from './authenticate'; // Update the path accordingly

// function LoginForm({ setToken }) {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     const handleLogin = async () => {
//         try {
//             const authenticationResult = await authenticate(username, password);

//             if (authenticationResult.success) {
//                 setError('');
//                 setToken(authenticationResult.token); // Set the token to log the user in
//             } else {
//                 setError(authenticationResult.error.message);
//             }
//         } catch (err) {
//             console.error(err);
//         }
//     };

//     return (
//         <div>
//             <h2>Log In</h2>
//             {error && <p>{error}</p>}
//             <form onSubmit={(e) => { e.preventDefault(); handleLogin(); } }>
//                 <label>
//                     Username:
//                     <input
//                         type="text"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)} />
//                 </label>
//                 <br />
//                 <label>
//                     Password:
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)} />
//                 </label>
//                 <br />
//                 <button type="submit">Log In</button>
//             </form>
//         </div>
//     );
// }

// export default LoginForm;
