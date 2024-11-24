import axios from 'axios';

const API_URL = 'http://localhost:5000/users'; // Backend URL'i

export const getProfile = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_URL}/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch profile');
  }
};

export const updateProfile = async (userData) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.put(`${API_URL}/profile`, userData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to update profile');
  }
};

export const deleteAccount = async () => {
  try {
    const token = localStorage.getItem('token');
    await axios.delete(`${API_URL}/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    throw new Error('Failed to delete account');
  }
};
