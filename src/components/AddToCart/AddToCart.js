import React, { useState } from 'react'
import CartAmountToggle from '../CartAmountToggle/CartAmountToggle';
import {NavLink} from 'react-router-dom';

function AddToCart({product}) {
    const {stock} = product;

    const [amount, setAmount] = useState(1);

    const setDecrease=()=>{
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    }
    const setIncrease = () =>{
        amount < stock ? setAmount (amount + 1) : setAmount(stock)
    }
  return (
    <>
    <CartAmountToggle amount={amount} setDecrease={setDecrease} setIncrease={setIncrease}/>
    <NavLink to='/cart'>
        <button className='button mt-2'>Add To Cart</button>

    </NavLink>
    </>
  )
}

export default AddToCart
