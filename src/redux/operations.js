import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const registerUser = createAsyncThunk('auth/registerUser', async userData => {
  try {
    const { data } = await axios.post('users/signup', userData);
    token.set(data.token);
    return data;
  } catch (error) {
    alert(error);
  }
});

const operations = {
  registerUser,
};
export default operations;
