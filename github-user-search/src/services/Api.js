import axios from "axios";

const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: API_KEY ? `Bearer ${API_KEY}` : undefined,
  },
});

// Example function to fetch user data
export async function fetchUser(username) {
  const response = await api.get(`/users/${username}`);
  return response.data;
}
