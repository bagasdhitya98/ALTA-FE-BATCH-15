import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Item {
  id: number;
  title: string;
  image: string;
  description: string;
  quantity: number;
  price: number;
}

export interface CartState {
  items: Item[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Item>) {
      state.items.push(action.payload);
      localStorage.setItem("items", state.items);
    },
    removeItem(state, action: PayloadAction<Item>) {
      state.items = state.items.filter((item) => {
        item.id !== action.payload;
      });
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
