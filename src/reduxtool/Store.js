import {configureStore} from "@reduxjs/toolkit"
import cartReducer from  '../reduxtool/features/Cart/CartSlice'
import modalReducer from '../reduxtool/features/Cart/ModalSlice'

export const store = configureStore({
    reducer :{
        cart:cartReducer,
        modal:modalReducer
    }
});