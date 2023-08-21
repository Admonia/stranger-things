import React, { useState, useEffect } from "react";
import { fetchAllPosts } from "../API";
import "./AllPosts.css";

const COHORT_NAME = "2306-ghp-et-web-ft-sf";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
const AUTH_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGUyNjgwMjJjMjc1MDAwMTQ4YzJlNTUiLCJ1c2VybmFtZSI6IkFkbW9uaWEiLCJpYXQiOjE2OTI2NDI0NTF9.E9GW6VwhUtPtXD16YTp4SGRP8kiSvT3cYxI6TQ-k3MI';

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
          setPosts(data.data.posts);
          setPostsToDisplay(data.data.posts);
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

  const handleEdit = async (postId) => {
    const updatedContent = {
      title: "Updated Title", // Update with the new title
      description: "Updated Description", // Update with the new description
      price: "$500.00", // Update with the new price
      location: "Updated Location", // Update with the new location
      willDeliver: false, // Update with the new delivery status
    };

    try {
      const updatedPost = await updatePost(postId, updatedContent);
      const updatedPosts = postsToDisplay.map((post) =>
        post._id === postId ? { ...post, ...updatedPost.data.post } : post
      );
      setPostsToDisplay(updatedPosts);
    } catch (error) {
      console.error(error);
    }
  };


  // const handleEdit = (postId) => {
  //   const postToEdit = postsToDisplay.find((post) => post._id === postId);
  //   if (postToEdit) {
  //     const updatedPosts = postsToDisplay.map((post) =>
  //       post._id === postId ? { ...post, isEditing: true } : post
  //     );
  //     setPostsToDisplay(updatedPosts);
  //   }
  // };
  const handleUpdate = (postId, updatedContent) => {
    const updatedPosts = postsToDisplay.map((post) =>
      post._id === postId
        ? { ...post, ...updatedContent, isEditing: false }
        : post
    );
    setPostsToDisplay(updatedPosts);
  };
  
  // const handleUpdate = (postId, updatedContent) => {
  //   const updatedPosts = postsToDisplay.map((post) =>
  //     post._id === postId
  //       ? { ...post, ...updatedContent, isEditing: false }
  //       : post
  //   );
  //   setPostsToDisplay(updatedPosts);
  // };

  const handleDelete = async (postId) => {
    try {
      const response = await fetch(`${BASE_URL}/posts/${postId}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (data.success) {
        const updatedPosts = postsToDisplay.filter((post) => post._id !== postId);
        setPostsToDisplay(updatedPosts);
      } else {
        console.error("Error deleting post:", data.error.message);
      }
    } catch (error) {
      console.error("An error occurred while deleting post:", error);
    }
  };


// const AUTH_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGUyNjgwMjJjMjc1MDAwMTQ4YzJlNTUiLCJ1c2VybmFtZSI6IkFkbW9uaWEiLCJpYXQiOjE2OTI2NDI0NTF9.E9GW6VwhUtPtXD16YTp4SGRP8kiSvT3cYxI6TQ-k3MI';


const handleAddNewPost = async () => {
  try {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', AUTH_TOKEN);

    const response = await fetch(`${BASE_URL}/posts`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        post: {
          title: 'My favorite Video Game',
          description: 'Eternal Darkness is not made anymore and very few copies are available and can only be played on a wii with a disk trey.',
          price: '$200.00',
          willDeliver: true,
        },
      }),
    });

    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

  return (
    <div className="all-posts-container">
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
      {postsToDisplay.map((post) => (
        <div key={post._id} className="post-container">
          {post.isEditing ? (
            <div>
              <input
                value={post.title}
                onChange={(e) => handleUpdate(post._id, { title: e.target.value })}
              />
              <textarea
                value={post.description}
                onChange={(e) =>
                  handleUpdate(post._id, { description: e.target.value })
                }
              />
              <input
                value={post.price}
                onChange={(e) => handleUpdate(post._id, { price: e.target.value })}
              />
              <button onClick={() => handleUpdate(post._id, { isEditing: false })}>
                Save
              </button>
            </div>
          ) : (
            <div>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <p>{post.price}</p>
              <p>Posted by: {post.author.username}</p>
              <div className="post-buttons">
                <button className="edit-button" onClick={() => handleEdit(post._id)}>
                  Edit
                </button>
                <button className="delete-button" onClick={() => handleDelete(post._id)}>
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
      <div className="post-container">
        <h2>Create New Post</h2>
        <button className="add-post-button" onClick={handleAddNewPost}>
          Add Post
        </button>
      </div>
    </div>
  );
}


