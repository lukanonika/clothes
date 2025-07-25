import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/login.jsx';
import Signup from './pages/signup.jsx';
import SingleProduct from './components/SingleProduct.jsx';
import Cart from './components/Cart.jsx';
import { useCart } from './components/CartContext.jsx';
import './App.css';

function CartWrapper() {
  const { cartCount, isCartVisible, closeCart } = useCart();

  return (
    <Cart
      cartCount={cartCount}
      isVisible={isCartVisible}
      onClose={closeCart}
    />
  );
}

function App() {
  return (
    <div className="app-wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>
      <CartWrapper />
    </div>
  );
}

export default App;