import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Receipt = () => {
  const { cart } = useContext(CartContext);

  // If the cart is empty, don't show the receipt
  if (cart.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div className="receipt">
      <h2>🧾 Receipt</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - {item.quantity} x ${item.price} = ${item.quantity * item.price}
          </li>
        ))}
      </ul>
      <h3>Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}</h3>
    </div>
  );
};

export default Receipt;
