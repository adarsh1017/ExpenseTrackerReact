// MyCart.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from './cartSlice';

const MyCart = () => {
  const isVisible = useSelector(state => state.cart.isVisible);
  const dispatch = useDispatch();

  const handleToggleCart = () => {
    dispatch(toggleCart());
  };

  return (
    <div>
      <button onClick={handleToggleCart}>My Cart</button>
      {isVisible && <div>Cart content goes here...</div>}
    </div>
  );
};

export default MyCart;
