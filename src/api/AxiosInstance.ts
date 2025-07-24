import axios from 'axios';

const BASE_URL = 'https://learn-api.kodekloud.com/api';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
