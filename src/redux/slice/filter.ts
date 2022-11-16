import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  page: 0,
  searchValue: "",
  totalCount: 0,
};
const filterSlice = createSlice({
  name: "filter",
  initialState,

  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setTotalCount: (state, action: PayloadAction<number>) => {
      state.totalCount = action.payload;
    },
  },
});
export const { setPage, setSearchValue, setTotalCount } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
