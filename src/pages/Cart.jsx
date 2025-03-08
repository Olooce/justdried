import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { supabase } from '../supabase'; //
import '../styles/Cart.css';

const Cart = () => {
  const { cart, setCart, removeFromCart } = useContext(CartContext);
  const [cartItems, setCartItems] = useState([]);

  // Fetch cart items from Supabase on mount
  useEffect(() => {
    const fetchCartItems = async () => {
      let { data, error } = await supabase.from('cart').select('*');
      if (error) {
        console.error('Error fetching cart:', error);
      } else {
        setCartItems(data);
      }
    };
    fetchCartItems();
  }, [cart]);

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Handle checkout: Clear cart from Supabase
  const handleCheckout = async () => {
    alert('Thank you for your purchase!');
    await supabase.from('cart').delete().neq('id', 0);
    setCart([]); // Clear cart in React state
    setCartItems([]); // Clear local state
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <h3>{item.name}</h3>
                <p>Ksh {item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total: Ksh {totalPrice.toFixed(2)}</h3>
          <button className="checkout-button" onClick={handleCheckout}>
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
