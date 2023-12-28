// // components/Cart.js
// import React from 'react';

// const Cart = ({ cartItems }) => {
//   const total = cartItems.reduce((sum, item) => sum + item.price, 0);

//   return (
//     <div>
//       <h2 className="text-xl font-semibold mb-2">Cart</h2>
//       <ul>
//         {cartItems.map((item) => (
//           <li key={item.id} className="mb-4">
//             <div className="border p-4">
//               <h3 className="text-lg font-semibold">{item.name}</h3>
//               <p className="text-gray-500">${item.price}</p>
//             </div>
//           </li>
//         ))}
//       </ul>
//       <div className="mt-4">
//         <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
//       </div>
//     </div>
//   );
// };

// export default Cart;


// components/Cart.js
// import React from 'react';
// import CartItem from './CartItem';

// const Cart = ({ cartItems, onRemove }) => {
//   return (
//     <div className="mt-4">
//       <h2 className="text-2xl mb-2">Shopping Cart</h2>
//       {cartItems.map((item) => (
//         <CartItem key={item.id} product={item} onRemove={onRemove} />
//       ))}
//     </div>
//   );
// };

// export default Cart;


// Cart.js
import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, onRemove }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
       <div className="mt-4 justify-between flex"> 
        <h2 className="text-xl font-semibold mb-2">Shopping Cart</h2>
        <p className="text-lg font-semibold">Total: ${calculateTotal().toFixed(2)}</p>
      
      </div>
      
      <ul className='  '>
        {cartItems.map((item) => (
          <li key={item.id} className="mb-4">
            <CartItem product={item} onRemove={onRemove} />
          </li>
        ))}
      </ul>

     
    </div>
  );
};

export default Cart;

