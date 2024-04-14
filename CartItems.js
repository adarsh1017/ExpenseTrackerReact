// CartItems.js

import { useSelector } from 'react-redux';

const CartItems = () => {
  const items = useSelector(state => state.cart.items);

  return (
    <div>
      <h2>Cart Items</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
