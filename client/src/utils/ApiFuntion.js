import axios from "axios";

export const api = axios.create({
  baseURL: "https://devblogs.mine.bz/blog/",
});
export async function getAllPosts() {
  try {
    const response = await api.get("/api/post/getposts");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching post");
  }
}
export async function signIn(formData) {
  try {
    const response = await api.post(
      "/api/auth/signin",
      JSON.stringify(formData),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    throw new Error("Error login");
  }
}
