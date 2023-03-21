import React from 'react'
import { useDispatch } from 'react-redux'
import { ChevronDown,ChevronUp } from '../icons'
import { addAmount, removeAmount, removeItem } from '../reduxtool/features/Cart/CartSlice';

const CartItem = ({id,img,title,price,amount}) => {
    const dispatch =useDispatch();
  return (
    <article className='cart-item'>
      <img src={img} alt={title}/>
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'><span>${price}</span></h4>
        <button className='remove-btn' onClick={()=> dispatch(removeItem(id))}>Remove</button>
      </div>
      <div>
      <button className='amount-btn' onClick={()=>dispatch(addAmount(id))}>
<ChevronUp/>
      </button>
      <p className='amount'>{amount}</p>
      <button className='amount-btn' onClick={()=>dispatch(removeAmount(id))}>
<ChevronDown/>
      </button>
      </div>
    </article>
  )
}

export default CartItem