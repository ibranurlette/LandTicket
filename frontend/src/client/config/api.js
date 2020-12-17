import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:3000/api/v1",
});

export const setAuthToken = (token) => {
  API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
