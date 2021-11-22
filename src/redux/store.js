import { configureStore } from '@reduxjs/toolkit';
import auth from './slice';
import { filterReducer } from './reducer';
import { phoneBookApi } from '../services/phoneBookAPI';

export const store = configureStore({
  reducer: {
    [phoneBookApi.reducerPath]: phoneBookApi.reducer,
    filter: filterReducer,
    auth: auth,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(phoneBookApi.middleware),
});
