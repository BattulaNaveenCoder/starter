import React from 'react'
import { useDispatch } from 'react-redux'
import { clearCart } from '../reduxtool/features/Cart/CartSlice';
import { closeModal } from '../reduxtool/features/Cart/ModalSlice';

const Modal = () => {
    const dispatch =useDispatch();
    const confirmClicked=()=>{
       dispatch(clearCart());
       dispatch(closeModal());
    }
  return (
    <aside className='modal-container'>
         <div className='modal'>
            <h4>remove all items from your shopping cart ?</h4>
            <div className='btn-container'>
                <button type='button' className='btn confirm-btn' onClick={()=>confirmClicked()}>confirm</button>
                <button type='button' className='btn clear-btn' onClick={()=>dispatch(closeModal())}>clear</button>
            </div>
         </div>
    </aside>
  )
}

export default Modal