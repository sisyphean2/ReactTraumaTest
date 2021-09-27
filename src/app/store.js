import { configureStore } from '@reduxjs/toolkit';
import pageOneSliceReducer from '../features/page-one/pageOneSlice';

export const store = configureStore({
  reducer: {
    pageOne: pageOneSliceReducer,
  },
});
