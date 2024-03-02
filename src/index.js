import axios from "axios";
export const baseURL = "http://localhost:6009/";
export const headers = { "Access-Control-Allow-Origin": "*", "Content-type": "application/json" };
export default axios.create({ baseURL, headers });
export const http = axios.create({ baseURL, headers });
const tokenString = localStorage.getItem('accessToken');
export const token = tokenString || null;
console.log("token:", token);
headers.Authorization = token;
const httpAuthentication = axios.create({ baseURL, headers });

export const httpAuth = httpAuthentication;