import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/* ---------- FAKESTORE CHECKOUT ---------- */
export const checkoutCart = createAsyncThunk(
  "cart/checkout",
  async ({ userId, items }) => {
    const products = items.map((item) => ({
      productId: item.id,
      quantity: item.quantity,
    }));

    const res = await fetch("https://fakestoreapi.com/carts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId,
        date: new Date().toISOString(),
        products,
      }),
    });
     if (!res.ok) throw new Error("Checkout failed");
    return res.json();
  }
);

/* ---------- LOCAL CART ---------- */
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    checkoutData: null,
    loading: false,
    error: null,
  },
  reducers: {
    addItem: (state, action) => {
      const { product, quantity } = action.payload;

      const existing = state.items.find(
        (item) => item.id === product.id
      );

      if (existing) {
        existing.quantity += quantity;
      } else {
        state.items.push({ ...product, quantity });
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },

    clearCart: (state) => {
      state.items = [];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(checkoutCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkoutCart.fulfilled, (state, action) => {
        state.loading = false;
        state.checkoutData = action.payload;
        state.items = []; // clear cart after checkout
      })
      .addCase(checkoutCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
