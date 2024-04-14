// CartIcon.js

import { useSelector } from 'react-redux';

const CartIcon = () => {
  const totalCount = useSelector(state => state.cart.totalCount);

  return (
    <div>
      <span>Cart</span>
      <span>({totalCount})</span>
    </div>
  );
};

export default CartIcon;
