import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    // We can add auth tokens here in the future
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Standardize error format for frontend consumption
    let errorMessage = 'An unexpected error occurred. Please try again.';
    
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.data && error.response.data.detail) {
        errorMessage = error.response.data.detail;
      } else if (error.response.status === 404) {
        errorMessage = 'Requested resource not found.';
      } else if (error.response.status >= 500) {
        errorMessage = 'Server error. Our engineers have been notified.';
      }
    } else if (error.request) {
      // The request was made but no response was received
      errorMessage = 'Network error. Please check your connection.';
    }
    
    const customError = new Error(errorMessage);
    customError.status = error.response ? error.response.status : null;
    customError.originalError = error;
    
    return Promise.reject(customError);
  }
);

export default api;

