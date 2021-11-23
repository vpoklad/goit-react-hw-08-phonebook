import { configureStore } from '@reduxjs/toolkit';

import { phoneBookApi } from '../services/phoneBookAPI';
import { filterSlice, authSlice } from './slice';

export const store = configureStore({
  reducer: {
    [phoneBookApi.reducerPath]: phoneBookApi.reducer,
    filter: filterSlice.reducer,
    auth: authSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(phoneBookApi.middleware),
});
