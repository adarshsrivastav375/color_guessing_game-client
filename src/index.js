import axios from "axios";
export const baseURL = "https://betting-setting-server.onrender.com/";
export const headers = { "Access-Control-Allow-Origin": "*", "Content-type": "application/json" };
export default axios.create({ baseURL, headers });
export const http = axios.create({ baseURL, headers });
const tokenString = localStorage.getItem('accessToken');
export const token = tokenString || null;
headers.Authorization = token;
const httpAuthentication = axios.create({ baseURL, headers });

export const httpAuth = httpAuthentication;