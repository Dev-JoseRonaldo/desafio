import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  history: string[];
}

const initialState: SearchState = {
  history: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addSearchHistory: (state, action: PayloadAction<string>) => {
      state.history = [...new Set([action.payload, ...state.history])];
    },
  },
});

export const { addSearchHistory } = searchSlice.actions;
export default searchSlice.reducer;
