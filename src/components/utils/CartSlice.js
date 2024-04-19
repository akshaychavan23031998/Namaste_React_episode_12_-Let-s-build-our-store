import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState : {
        items :[]
    },
    reducers : {
        addItems : (state, action) => {
            state.items.push(action.items);
        },
        removeItems : () => {
            state.items.pop(action.items);
        },
        clearCart: () => {
            state.items.length = 0;
        }
    }
})

export const {addItems,removeItems,clearCart} = CartSlice.actions;
export default CartSlice.reducer;