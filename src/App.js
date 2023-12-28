
// import React, { useState } from 'react';
// import ProductList from './components/ProductList';
// import Cart from './components/Cart';
// import './App.css'; // Don't forget to import your Tailwind CSS styles

// function App() {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems([...cartItems, product]);
//   };

//   const removeFromCart = (productId) => {
//     const updatedCart = cartItems.filter((item) => item.id !== productId);
//     setCartItems(updatedCart);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">E-commerce Store</h1>

//       <div className="grid grid-cols sm:grid-cols-3 gap-4 p-2 ">
//         {/* Display list of products */}
//         <ProductList addToCart={addToCart} />

//         {/* Display the cart */}
//         <Cart cartItems={cartItems} onRemove={removeFromCart} />
//       </div>
//     </div>
//   );
// }

// export default App;


// App.js
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

import './App.css'; // Don't forget to import your Tailwind CSS styles

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      // If the item already exists in the cart, update its quantity and price
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += 1;
      setCartItems(updatedCart);
    } else {
      // If the item is not in the cart, add it with a quantity of 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === productId);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cartItems];
      // If the quantity is greater than 1, decrement the quantity
      if (updatedCart[existingItemIndex].quantity > 1) {
        updatedCart[existingItemIndex].quantity -= 1;
      } else {
        // If the quantity is 1, remove the entire item
        updatedCart.splice(existingItemIndex, 1);
      }
      setCartItems(updatedCart);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">E-commerce Store</h1>

      <div className="grid lg:grid-cols-2  gap-4 p-2 ">
       

        {/* Display the cart */}
        <Cart cartItems={cartItems} onRemove={removeFromCart} /> 
        
        {/* Display list of products */}
        <ProductList addToCart={addToCart} />
      </div>
    </div>
  );
}

export default App;
