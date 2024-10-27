
import React from 'react';
import jacket from '../images/jacket.jpeg';
import juicer from '../images/juixcer.jpeg';
import lcd from '../images/lcd.jpeg';
import lipstick from '../images/lipstick.jpeg';
import shoes from '../images/shoes.jpeg';
import suit from '../images/suit.jpeg';

const products = [
  { id: 1, name: 'Beautiful Jacket', price: 19.99, image: jacket },
  { id: 2, name: 'Juicer Machine', price: 29.99, image: juicer },
  { id: 3, name: 'LCD TV', price: 39.99, image: lcd },
  { id: 4, name: 'Lipstick', price: 25.99, image: lipstick },
  { id: 5, name: 'Shoes', price: 59.99, image: shoes },
  { id: 6, name: 'Coat Suit', price: 69.99, image: suit },
];

const ProductList = ({ addToCart }) => (
  <div className='mt-10'>
    <ul className="grid gap-6">
      {products.map((product) => (
        <li key={product.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition p-6">
          <img src={product.image} alt={product.name} className="w-full h-56 object-cover rounded-lg" />
          <div className="mt-4">
            <h3 className="text-2xl text-green-800 font-semibold">{product.name}</h3>
            <p className="text-xl font-bold text-gray-800">${product.price}</p>
          </div>
          <button
            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default ProductList;
