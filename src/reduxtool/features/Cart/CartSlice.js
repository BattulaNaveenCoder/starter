import {createSlice} from '@reduxjs/toolkit';
import cartItems from '../../../cartItems';

const initialState = {
   cartItems :cartItems,
   amount:2,
   total:0,
   isLoading :true
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        clearCart :(state)=>{
            state.cartItems =[];
        },
        removeItem :(state,action)=>{         
         state.cartItems= state.cartItems.filter((item)=>item.id !== action.payload)
        },
        addAmount :(state,action)=>{
         const cartItem =state.cartItems.find((item)=> item.id === action.payload);
         cartItem.amount =cartItem.amount+1;
        },
        removeAmount :(state,action)=>{
            const cartItem =state.cartItems.find((item)=> item.id === action.payload);
            cartItem.amount =cartItem.amount-1;
        },
        calculateTotals :(state)=>{
            let amount =0;
            let total=0;
            state.cartItems.forEach((item)=>{
                amount += item.amount;
                total += item.price*item.amount;
            })
            state.amount=amount;
            state.total =total;
        }
    }
})
//console.log(cartSlice)

export const {clearCart,removeItem,addAmount,removeAmount,calculateTotals} = cartSlice.actions;
export default cartSlice.reducer