// // components/ProductList.js
// import React from 'react';

// const products = [
//   { id: 1, name: 'Product 1', price: 19.99 },
//   { id: 2, name: 'Product 2', price: 29.99 },
//   { id: 3, name: 'Product 3', price: 39.99 },
// ];

// const ProductList = ({ addToCart }) => {
//   return (
//     <div>
//       <h2 className="text-xl font-semibold mb-2">Products</h2>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id} className="mb-4">
//             <div className="border p-4">
//               <h3 className="text-lg font-semibold">{product.name}</h3>
//               <p className="text-gray-500">${product.price}</p>
//               <button
//                 className="mt-2 bg-blue-500 text-white py-1 px-4 rounded"
//                 onClick={() => addToCart(product)}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductList;
// components/ProductList.js


// import React from 'react';

// const products = [
//   { id: 1, name: 'Product 1', price: 19.99 },
//   { id: 2, name: 'Product 2', price: 29.99 },
//   { id: 3, name: 'Product 3', price: 39.99 },
// ];

// const ProductList = ({ addToCart }) => {
//   return (
//     <div>
//       <h2 className="text-xl font-semibold mb-2">Products</h2>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id} className="mb-4">
//             <div className="border p-4">
//               <h3 className="text-lg font-semibold">{product.name}</h3>
//               <p className="text-gray-500">${product.price}</p>
//               <button
//                 className="mt-2 bg-blue-500 text-white py-1 px-4 rounded"
//                 onClick={() => addToCart(product)}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductList;


// components/ProductList.js
import React from 'react';

import jacket from '../images/jacket.jpeg'
import juicer from '../images/juixcer.jpeg'
import lcd from '../images/lcd.jpeg'
import lipstck from '../images/lipstick.jpeg'
import shoes from '../images/shoes.jpeg'
import suit from '../images/suit.jpeg'

const products = [
  { id: 1, name: 'Beautiful Jaclet ', price: 19.99 , image:jacket },
  { id: 2, name: 'Juicer Machine ', price: 29.99 , image:juicer },
  { id: 3, name: 'LCD -TV', price: 39.99 , image:lcd },
  { id: 4, name: 'LipStick', price: 25.99 , image:lipstck },
  { id: 5, name: 'Shoes', price: 59.99 , image:shoes},
  { id: 6, name: 'Coat Suit', price: 69.99 , image: suit },
];

const ProductList = ({ addToCart }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="mb-4">
            <div className="border p-4">
              <div className='flex justify-between'>
                <div >
                   <h3 className="text-2xl font-semibold">{product.name}</h3>
                  <p className="text-black text-xl font-serif font-semibold ">${product.price}</p>
                </div>
               <img src={product.image} className=' w-[100px] h-[100px] sm:w-auto sm:h-auto ' alt="" />
              </div>
              
              <button
                className="mt-2 bg-blue-500 text-white py-1 px-4 rounded"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
