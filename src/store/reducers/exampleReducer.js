import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  exampleData: []
};

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    addData: (state, action) => {
      state.exampleData.push(action.payload);
    }
  }
});

export const { addData } = exampleSlice.actions;
export default exampleSlice.reducer;