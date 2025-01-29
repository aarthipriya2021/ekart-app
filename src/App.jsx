import NavBar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import WishList from './pages/wishlist/WishList';
import Cart from "./pages/cart/Cart";
import ErrorPage from './pages/error/ErrorPage';
import ProductDetails from './components/productdetails/ProductDetails';
import About from "./pages/explore/ExploreAll";
import { Routes, Route } from 'react-router-dom'
import './App.scss'
import Footer from './components/footer/Footer';

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  

  return (
    <div className='App'>
      <NavBar />
      <div className='main'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />

      <ToastContainer position="top-right" />
      <ToastContainer />
    </div>
  )
}

export default App
