'use client'

import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: 'https://transaction-p5zxnxph7q-ew.a.run.app',
});

// Add a request interceptor to include the token
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

export default api;
