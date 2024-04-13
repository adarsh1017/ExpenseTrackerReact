// expensesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const expensesSlice = createSlice({
  name: 'expenses',
  initialState: {
    list: [],
    showPremiumButton: false,
  },
  reducers: {
    addExpense(state, action) {
      state.list.push(action.payload);
      if (state.list.reduce((total, expense) => total + expense.amount, 0) > 10000) {
        state.showPremiumButton = true;
      }
    },
    // Other reducers for editing or deleting expenses as needed
  },
});

export const { addExpense } = expensesSlice.actions;
export default expensesSlice.reducer;
