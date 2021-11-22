import { configureStore } from '@reduxjs/toolkit';
import slice from './slice';
import { filterReducer } from './reducer';
import { phoneBookApi } from '../services/phoneBookAPI';

export const store = configureStore({
  reducer: {
    [phoneBookApi.reducerPath]: phoneBookApi.reducer,
    filter: filterReducer,
    auth: slice.auth,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(phoneBookApi.middleware),
});
