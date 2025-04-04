import { createSlice } from '@reduxjs/toolkit'
import Swal from 'sweetalert2';

const initialState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart:(state, action) => {
            const existingItem = state.cartItems.find(item => item._id === action.payload._id);
            if(!existingItem){
                state.cartItems.push(action.payload);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Item added to Cart",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }else{
                Swal.fire({
                    position: "center",
                    icon: "warning",
                    title: "Item already added to Cart",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        },
        removeFromCart:(state, action) => {
            state.cartItems = state.cartItems.filter(item => item._id !== action.payload._id);
        },
        clearCart:(state) => {
            state.cartItems = [];
        }
    }
})

export const {addToCart , removeFromCart , clearCart} = cartSlice.actions;
export default cartSlice.reducer;  