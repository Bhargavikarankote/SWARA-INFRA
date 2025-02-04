import axios from 'axios';

// The Flask API URL
const API_URL = 'http://localhost:5000';  // Change if Flask is running on a different port

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
