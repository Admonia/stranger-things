// import React, { useState, useEffect } from 'react';

// const BASE_URL = 'https://your-api-base-url.com'; // Replace with your API base URL

// const UserData = ({ token }) => {
//   const [userData, setUserData] = useState(null);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await fetch(`${BASE_URL}/users/me`, {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`
//           },
//         });
//         const result = await response.json();
//         setUserData(result);
//       } catch (err) {
//         setError('Failed to fetch user data.');
//       }
//     };

//     fetchUserData();
//   }, [token]);

//   if (error) {
//     return <p>{error}</p>;
//   }

//   if (!userData) {
//     return <p>Loading user data...</p>;
//   }

//   return (
//     <div>
//       <h2>User Data</h2>
//       <p>Username: {userData.user.username}</p>
//       <p>Number of Posts: {userData.posts.length}</p>
//       <p>Number of Messages: {userData.messages.length}</p>
//     </div>
//   );
// };

// export default UserData;
