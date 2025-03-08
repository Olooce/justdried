import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; // ✅ Import CartProvider
import { AuthProvider } from './context/AuthContext'; // ✅ Import AuthProvider
import Header from './components/Header';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Receipt from './pages/Receipt';
import Login from './pages/Login'; // ✅ Add Login Page
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
  return (
    <AuthProvider> {/* ✅ Wrap inside AuthProvider for authentication */}
      <CartProvider> {/* ✅ CartProvider remains here */}
        <Router>
          <div className="app-container"> {/* ✅ Wrapper to manage layout */}
            <Header />
            <div className="main-content"> {/* ✅ Pushes footer to bottom */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/receipt" element={<Receipt />} />
                <Route path="/login" element={<Login />} /> {/* ✅ Login Page */}
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
