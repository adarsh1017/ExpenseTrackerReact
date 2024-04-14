// Product.js

import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const Product = ({ id, name, price }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addItem({ id, name, price }));
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <button onClick={addToCartHandler}>Add to Cart</button>
    </div>
  );
};

export default Product;
