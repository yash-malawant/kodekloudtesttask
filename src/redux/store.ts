import { configureStore } from '@reduxjs/toolkit';
import courseReducer from './slices/courseSlice';

export const store = configureStore({
  reducer: {
    course: courseReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
