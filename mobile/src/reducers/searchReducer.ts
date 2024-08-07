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
      const newHistory = [...new Set([action.payload, ...state.history])];

      // limitando o número de pesquisas exibidas no histórico
      state.history = newHistory.slice(0, 10);
    },
  },
});

export const { addSearchHistory } = searchSlice.actions;
export default searchSlice.reducer;
