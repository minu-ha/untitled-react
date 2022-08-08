import { configureStore, createSlice } from '@reduxjs/toolkit';
import user from './userSlice';

const stock = createSlice({
  name: 'stock',
  initialState: [10, 11, 12],
});

const cart = createSlice({
  name: 'cart',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 },
  ],
  reducers: {
    addCount(state, action) {
      const findIndex = state.findIndex((a) => a.id === action.payload);
      state[findIndex].count++;
    },
    addItem(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addCount, addItem } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    cart: cart.reducer,
  },
});
