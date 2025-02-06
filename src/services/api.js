// import axios from 'axios';

// // The Flask API URL
// const API_URL = 'http://localhost:5000';  // Change if Flask is running on a different port

// // Fetch images based on status (Completed or Ongoing)
// export const getImagesByStatus = async (status) => {
//   try {
//     const response = await axios.get(`${API_URL}/get_images/${status}`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching images:', error);
//     throw error;
//   }
// };

// // Upload image to Flask API
// export const uploadImage = async (formData) => {
//   try {
//     const response = await axios.post(`${API_URL}/upload_image`, formData, {
//       headers: { 'Content-Type': 'multipart/form-data' },
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error uploading image:', error);
//     throw error;
//   }
// };


// import axios from "axios";

// // Flask API URL (Updated to port 5001)
// const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5001";

// // Fetch images based on status (Completed or Ongoing)
// export const getImagesByStatus = async (status) => {
//   try {
//     const response = await axios.get(`${API_URL}/get_images/${status}`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching images:", error.response?.data || error.message);
//     return { error: "Failed to fetch images" };
//   }
// };

// // Upload image to Flask API
// export const uploadImage = async (formData) => {
//   try {
//     const response = await axios.post(`${API_URL}/upload_image`, formData, {
//       headers: { "Content-Type": "multipart/form-data" },
//     });
//     return { success: true, data: response.data };
//   } catch (error) {
//     console.error("Error uploading image:", error.response?.data || error.message);
//     return { success: false, error: "Image upload failed" };
//   }
// };

// // Register a new user
// export const registerUser = async (formData) => {
//   try {
//     const response = await axios.post(`${API_URL}/register`, formData, {
//       headers: { "Content-Type": "multipart/form-data" },
//     });
//     return { success: true, data: response.data };
//   } catch (error) {
//     console.error("Error registering user:", error.response?.data || error.message);
//     return { success: false, error: "Registration failed" };
//   }
// };

// // Login user
// export const loginUser = async (formData) => {
//   try {
//     const response = await axios.post(`${API_URL}/login`, formData, {
//       headers: { "Content-Type": "multipart/form-data" },
//     });
//     return { success: true, data: response.data };
//   } catch (error) {
//     console.error("Error logging in:", error.response?.data || error.message);
//     return { success: false, error: "Login failed" };
//   }
// };


// import axios from 'axios';

// // Use Flask backend running on port 5001
// const API_URL = 'http://localhost:5001';

// // Fetch images based on status (Completed or Ongoing)
// export const getImagesByStatus = async (status) => {
//   try {
//     const response = await axios.get(`${API_URL}/get_images/${status}`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching images:', error);
//     throw error;
//   }
// };

// // Upload image to Flask API
// export const uploadImage = async (formData) => {
//   try {
//     const response = await axios.post(`${API_URL}/upload_image`, formData, {
//       headers: { 'Content-Type': 'multipart/form-data' },
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error uploading image:', error);
//     throw error;
//   }
// };

// // User login API
// export const loginUser = async (credentials) => {
//   try {
//     const response = await axios.post(`${API_URL}/login`, credentials);
//     return { success: true, data: response.data };
//   } catch (error) {
//     console.error('Login error:', error.response?.data || error.message);
//     return { success: false, error: error.response?.data?.message || 'Login failed' };
//   }
// };

// // User registration API
// export const registerUser = async (userData) => {
//   try {
//     const response = await axios.post(`${API_URL}/register`, userData);
//     return { success: true, data: response.data };
//   } catch (error) {
//     console.error('Registration error:', error.response?.data || error.message);
//     return { success: false, error: error.response?.data?.message || 'Registration failed' };
//   }
// };


import axios from 'axios';

// Use Flask backend running on port 5001
const API_URL = 'http://localhost:5001';

// Fetch images based on status (Completed or Ongoing)
export const getImagesByStatus = async (status) => {
  try {
    const response = await axios.get(`${API_URL}/get_images/${status}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};

// Upload image to Flask API
export const uploadImage = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/upload_image`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

// User login API
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
    return { success: true, data: response.data };
  } catch (error) {
    console.error('Login error:', error.response?.data || error.message);
    return { success: false, error: error.response?.data?.message || 'Login failed' };
  }
};

// User registration API
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
    return { success: true, data: response.data };
  } catch (error) {
    console.error('Registration error:', error.response?.data || error.message);
    return { success: false, error: error.response?.data?.message || 'Registration failed' };
  }
};
