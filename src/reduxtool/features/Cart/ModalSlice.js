import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    isOpend :false,
}

const modalSlice = createSlice({
    name :"modal",
    initialState,
    reducers :{
        openModal :(state)=>{
            state.isOpend = true;
        },
        closeModal :(state)=>{
           state.isOpend =false;
        }
    }
})
export const {openModal,closeModal} =modalSlice.actions
export default modalSlice.reducer