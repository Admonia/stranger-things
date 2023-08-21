// api.js
const COHORT_NAME = "2306-ghp-et-web-ft-sf";
// const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}/posts`;
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;


export async function fetchAllPosts() {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    // console.log(response)
  }
}

export async function fetchSinglePost(id) {
  try {
    const response = await fetch(`${BASE_URL}/posts/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}


///////////////////////////////////

// Create a new post
const createPost = async (token, postData) => {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        post: postData
      })
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};

// Edit an existing post
const editPost = async (token, postId, postData) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${postId}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        post: postData
      })
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};

// Delete a post
const deletePost = async (token, postId) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${postId}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};

export { createPost, editPost, deletePost };
