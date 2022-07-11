import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface ProductState {
    id: number,
    thumbnail: string,
    title: string,
    price: number,
    quantity: number,
}

interface CartState {
    products: ProductState[],
    totalPrice: number,
    totalQuantity: number,
}

// const initialState: CartState = {
//     products: [],
//     totalPrice: 0,
// }
const initialState: CartState = {
    products: [
        {
          id: 1,
          thumbnail: 'https://dummyjson.com/image/i/products/1/thumbnail.jpg',
          title: 'iPhone 9',
          price: 549,
          quantity: 3
        },
        {
          id: 3,
          thumbnail: 'https://dummyjson.com/image/i/products/3/thumbnail.jpg',
          title: 'Samsung Universe 9',
          price: 1249,
          quantity: 1
        },
        {
          id: 4,
          thumbnail: 'https://dummyjson.com/image/i/products/4/thumbnail.jpg',
          title: 'OPPOF19',
          price: 280,
          quantity: 5
        }
      ],
      totalPrice: 2078,
      totalQuantity: 9
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<ProductState>) => {
            const currentProduct = state.products.find((item: ProductState) => item.id === action.payload.id);

            if(currentProduct === undefined) {
                state.products.push(action.payload);
            } else {
                currentProduct.quantity += action.payload.quantity;
            }

            state.totalPrice += action.payload.price * action.payload.quantity;
            state.totalQuantity += action.payload.quantity;
        },
        deleteProduct: (state, action) => {
            const deletedProduct = state.products.find(product => product.id === action.payload.id);
            
            if(deletedProduct !== undefined) {
                state.products = state.products.filter(product => product.id !== action.payload.id);

                state.totalPrice -= deletedProduct.price * deletedProduct.quantity;
                state.totalQuantity -= deletedProduct.quantity;
            }
        },
        clearCart: (state, action) => {
            state = initialState;
        },
    }
})

export const { addProduct, deleteProduct, clearCart } = cartSlice.actions;

export const getCart = (state: RootState) => state.cart;

export default cartSlice.reducer;