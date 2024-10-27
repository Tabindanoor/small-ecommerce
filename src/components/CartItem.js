

import React from 'react';

const CartItem = ({ product, onRemove ,image}) => (
  <div className="flex items-center justify-between p-4 border-b">
    <div>
      <h4 className="text-lg font-bold text-orange-800">{product.name}</h4>
      <p className="text-gray-600 font-semibold" >{product.quantity} x ${product.price}</p>
      <img src={product.image} alt="" />
    </div>
    <button
      className="text-red-600 hover:text-red-800 p-3 bg-red-100 border-2 border-red-800 rounded-xl shadow-lg shadow-slate-200"
      onClick={() => onRemove(product.id)}
    >
      Remove
    </button>
  </div>
);

export default CartItem;


