
// import React from 'react';

// const CartItem = ({ product, onRemove }) => {
//   return (
//     <div className="flex items-center justify-between border p-2 mb-2">
//       <div>
//         <p className="text-lg">{product.name}</p>
//         <p className="text-sm text-gray-500">${product.price}</p>
//       </div>
//       <div className="flex items-center">
//         <button
//           className="text-red-500 hover:text-red-700 mr-2"
//           onClick={() => onRemove(product.id)}
//         >
//           Remove
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CartItem;


// CartItem.js
import React from 'react';

const CartItem = ({ product, onRemove }) => {
  return (
    <div className="flex items-center justify-between border p-2 mb-2">
      <div>
        <p className="text-lg">{product.name}</p>
        <p className="text-sm text-gray-500">{product.description}</p>
      </div>
      <div className=" items-center">
        <p className="mr-2">{product.quantity} x ${product.price}</p>
        <button
          className="text-red-700 font-semibold hover:text-white hover:rounded-xl p-1"
          onClick={() => onRemove(product.id)}
        >
          Remove!
        </button>
      </div>
    </div>
  );
};

export default CartItem;

