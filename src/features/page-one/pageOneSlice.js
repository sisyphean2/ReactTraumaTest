import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  values: new Array(20).fill(null),
  status: 'unsubmitted',
};

export const pageOneSlice = createSlice({
  name: 'pageOne',
  initialState,
  reducers: {
    updateAnswer: (state, action) => {
      state.values[action.payload.index] = action.payload.value;
    },
    updateStatus: state => {
      state.status = 'submitted';
    }
  }
});

export const { updateAnswer, updateStatus } = pageOneSlice.actions;

export const getPageOneAnswers = (state) => state.pageOne.values;
export const getPageOneStatus = (state) => state.pageOne.status;

export default pageOneSlice.reducer;
