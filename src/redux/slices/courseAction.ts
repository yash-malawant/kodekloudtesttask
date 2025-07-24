import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../api/AxiosInstance';

export const fetchCourses = createAsyncThunk(
  'courses/fetchCourses',
  async (page: number, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/courses?page=${page}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch course list');
    }
  }
);

export const fetchCourseDetails = createAsyncThunk(
  'courses/fetchCourseDetail',
  async (course: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/courses/${course}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch course details');
    }
  }
);
