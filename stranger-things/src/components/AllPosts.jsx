import React, { useState, useEffect } from "react";
import { fetchAllPosts } from "../API";

const COHORT_NAME = "2306-ghp-et-web-ft-sf";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export default function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [postsToDisplay, setPostsToDisplay] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(BASE_URL + "/posts");
        const data = await response.json();
        if (data.success) {
          setPosts(data.data.posts); // Update this line to set the correct posts array
          setPostsToDisplay(data.data.posts); // Also update this line
        } else {
          setError("Error fetching posts.");
        }
      } catch (error) {
        setError("Error fetching posts.");
      }
    }
    fetchPosts();
  }, []);

  const handleSearch = () => {
    const filteredPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(searchParam)
    );
    setPostsToDisplay(filteredPosts);
  };

  return (
    <div>
      <div>
        <label>
          Search:{" "}
          <input
            type="text"
            placeholder="search"
            value={searchParam}
            onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
          />
        </label>
        <button onClick={handleSearch}>Search</button>
      </div>
      {error && <p>{error}</p>}
      {console.log(postsToDisplay)} {/* Add this line to log the content of postsToDisplay */}
      {postsToDisplay.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <p>{post.price}</p>
          {/* Render other post details */}
        </div>
      ))}
    </div>
  );
}
