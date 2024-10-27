
import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, onRemove ,image}) => {
  const calculateTotal = () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Shopping Cart</h2>
        <p className="text-xl text-green-900 font-semibold">Total: ${calculateTotal().toFixed(2)}</p>
      </div>
      <ul>
        {cartItems.length ? (
          cartItems.map((item) => (
            <li key={item.id}>
              <CartItem product={item} onRemove={onRemove}  image={image} />
            </li>
          ))
        ) : (
          <p className="text-yellow-700 font-bold text-center ">Your cart is empty.</p>
        )}
      </ul>
    </div>
  );
};

export default Cart;
