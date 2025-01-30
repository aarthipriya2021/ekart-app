import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  searchedProduct: "",
  category: "",
};

const FilterSlice = createSlice({
  name: "filterProduct",
  initialState,
  reducers: {
    setSearchProduct: (state, action) => {
      state.searchedProduct = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setCategory, setSearchProduct } = FilterSlice.actions;
export default FilterSlice.reducer;
