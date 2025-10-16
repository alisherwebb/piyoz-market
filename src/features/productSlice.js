import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  productsList: [],
  amount: 0,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      state.productsList.push({ ...payload, productAmount: 1 });
      state.amount = state.amount + 1;
    },
    plusProductAmount: (state, { payload }) => {
      state.productsList = state.productsList.map((product) => {
        return product.id === payload
          ? { ...product, productAmount: product.productAmount + 1 }
          : { ...product };
      });
    },
    minusProductAmount: (state, { payload }) => {
      const activeProduct = state.productsList.find((el) => el.id === payload);
      if (activeProduct.productAmount === 1) {
        state.productsList = state.productsList.filter(
          (el) => el.id != payload
        );
        state.amount = state.amount - 1;
        toast.error("Mahsulot endi savatda emas")
      }
      state.productsList = state.productsList.map((product) => {
        return product.id === payload
          ? { ...product, productAmount: product.productAmount - 1 }
          : { ...product };
      });
    },
  },
});

export const { addProduct, plusProductAmount, minusProductAmount } =
  productSlice.actions;
export default productSlice.reducer;
