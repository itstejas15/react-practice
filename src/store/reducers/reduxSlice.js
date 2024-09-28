import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  state: 100
};

const reduxSlice = createSlice({
  name: 'redux',
  initialState,
  reducers: {
    setValue: (state, action) => {
      // state.value = action.payload;
      return {
        ...state,
        value: action.payload
      }
    },
    setState: (state, action) => {
      state.state = action.payload;
    }
  }
});

export const {
  setValue,
  setState
} = reduxSlice.actions;

export const getState = (state) => state.redux.state;
export default reduxSlice.reducer;
