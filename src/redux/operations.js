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

const loginUser = createAsyncThunk('auth/login', async userData => {
  try {
    const { data } = await axios.post('/users/login', userData);
    token.set(data.token);
    return data;
  } catch (error) {
    alert(error);
  }
});
const fetchData = createAsyncThunk('data/get', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {}
});

const operations = {
  registerUser,
  loginUser,
  fetchData,
};
export default operations;
