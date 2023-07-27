import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart} from '../../state/action-creators';


const Cart = () => {
  const cart = useSelector(state=> state.reducer.cart);
  const dispatch = useDispatch();

  
  const handleRemoveFromCart = (cardId) => {
    const cartItemIndex = cart.findIndex((item) => item.id === cardId);
    if (cartItemIndex !== -1) {

      dispatch(removeFromCart(cartItemIndex)); // Pass the index to the action
    }
  };

  return (
    <div className='container'>
      <div className='cart-wrapper'>
      {cart&&cart.map((card)=>{
        return(
<div className='cart'>
          <div className='img'>
            <img src={card.img} alt='' />
          </div>
          <div className='cart-content'>
            <h2>{card.title}</h2>

            <button onClick={()=>handleRemoveFromCart(card.id)} className="remove">remove</button>
          </div>
        </div>
        )
      })  }
       
      </div>
    </div>
  )
}

export default Cart
