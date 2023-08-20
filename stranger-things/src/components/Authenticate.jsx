// const BASE_URL = 'https://your-api-base-url.com'; // Replace with your API base URL

const COHORT_NAME = "2306-ghp-et-web-ft-sf";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

const authenticate = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });

    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};

export default authenticate;





// // Authenticate.jsx
// import React, { useState } from "react";
// // const COHORT_NAME = "2306-ghp-et-web-ft-sf";
// // const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

// export default function Authenticate({ token }) {
//   const [error, setError] = useState(null);
//   const [successMessage, setSuccessMessage] = useState(null);
//   const [userData, setUserData] = useState(null);

//   async function handleClick() {
//     try {
//       const response = await fetch(`https://strangers-things.herokuapp.com/api/2306-ghp-et-web-ft-sf/posts`, {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       });

//       if (response.ok) {
//         const result = await response.json();
//         setSuccessMessage(result.message);

//         // Store user data for displaying username
//         setUserData(result.data);
//       } else {
//         setError("Authentication failed. Token may be invalid.");
//       }
//     } catch (error) {
//       setError("An error occurred. Please try again later.");
//     }
//   }

//   return (
//     <div>
//       <h2>Authenticate</h2>
//       {error && <p>Error: {error}</p>}
//       {successMessage && <p>Success: {successMessage}</p>}
//       {userData && <p>Logged in as: {userData.username}</p>}
//       <button onClick={handleClick}>Authenticate Token</button>
//     </div>
//   );
// }