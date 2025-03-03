// import axios from 'axios';

// const axiosBasicRequest = (url, options) => {
//   const instance = axios.create({ baseURL: `${import.meta.env.VITE_API_KEY}${url}`, ...options });
//   return instance;
// };

// const axiosAuthApi = (url, options) => {
//   const token = localStorage.getItem('token');
//   const instance = axios.create({
//     baseURL: `${import.meta.env.VITE_API_KEY}${url}`,
//     headers: { Authorization: `Bearer ${token}` },
//     ...options,
//   });
//   return instance;
// };

// export const axiosClient = axiosBasicRequest;
// export const axiosAuthClient = axiosAuthApi;
