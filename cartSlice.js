// cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalCount: 0,
    cartVisible: false, // Add cart visibility state
  },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({ ...newItem, quantity: 1 });
        state.totalCount += 1;
      } else {
        existingItem.quantity += 1;
        state.totalCount += 1;
      }
    },
    removeItem(state, action) {
      const itemId = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === itemId);

      if (existingItemIndex !== -1) {
        const existingItem = state.items[existingItemIndex];
        state.items.splice(existingItemIndex, 1);
        state.totalCount -= existingItem.quantity;
      }
    },
    updateQuantity(state, action) {
      const { itemId, newQuantity } = action.payload;
      const existingItem = state.items.find(item => item.id === itemId);

      if (existingItem) {
        const difference = newQuantity - existingItem.quantity;
        existingItem.quantity = newQuantity;
        state.totalCount += difference;
      }
    },
    toggleCart(state) {
      state.cartVisible = !state.cartVisible;
    },
  },
});

export const { addItem, removeItem, updateQuantity, toggleCart } = cartSlice.actions;
export default cartSlice.reducer;
