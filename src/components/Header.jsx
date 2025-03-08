import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import { useAuth } from '../context/AuthContext'; // ✅ Import useAuth

const Header = () => {
  const { user, login, logout } = useAuth(); // ✅ Correct way to use useAuth()

  return (
    <header className="header">
      <div className="logo">JustDried</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart</Link></li>

          {/* 🔥 Show Login if user is not logged in, otherwise show Logout */}
          {user ? (
            <li><button className="auth-button" onClick={logout}>Logout</button></li>
          ) : (
            <li><Link to="/login" className="auth-button">Login</Link></li> // ✅ Redirect to Login page instead of calling login()
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
