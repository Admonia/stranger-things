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