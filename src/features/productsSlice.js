import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadProducts = createAsyncThunk(
  "products/loadProducts",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    filteredProducts: [],
    loading: false,
    error: null,
  },
  reducers: {
    FILTER_BY_CATEGORY: (state, action) => {
      state.filteredProducts = action.payload;
    },
    FILTER_BY_PRICE: (state, action) => {
      const { minPrice, maxPrice } = action.payload;
      state.filteredProducts = state.products.filter(
        (item) => item.price >= minPrice && item.price <= maxPrice
      );
    },
    FILTER_BY_RATING: (state, action) => {
      const rating = action.payload;
      state.filteredProducts = state.products.filter(
        (item) => Math.floor(item.rating.rate) >= rating
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.filteredProducts = action.payload;
      })
      .addCase(loadProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export the action creator
export const { FILTER_BY_CATEGORY,FILTER_BY_PRICE, FILTER_BY_RATING } = productsSlice.actions;
export default productsSlice.reducer;
