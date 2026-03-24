import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './studentSlice';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    students: studentReducer,
    auth: authReducer,
  },
});

export default store;
