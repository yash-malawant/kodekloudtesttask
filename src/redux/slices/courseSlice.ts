// src/store/slices/courseSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import { fetchCourseDetails, fetchCourses } from './courseAction';

const initialState: any = {
  loading: false,
  error: null,
  courses: [],
  metadata: {},
  courseDetail: {},
};
const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = [...state.courses, ...action.payload.courses];
        state.metadata = action?.payload.metadata;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Failed to fetch courses';
      });

    builder
      .addCase(fetchCourseDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCourseDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.courseDetail = action.payload;
      })
      .addCase(fetchCourseDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Failed to fetch courses';
      });
  },
});

export default courseSlice.reducer;
