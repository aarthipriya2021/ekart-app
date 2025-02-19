import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import WishList from "./pages/wishlist/WishList";
import Cart from "./pages/cart/Cart";
import ErrorPage from "./pages/error/ErrorPage";
import ProductDetails from "./components/productdetails/ProductDetails";
import ExploreAll from "./pages/explore/ExploreAll";
import Footer from "./components/footer/Footer";
import Login from "./components/Authentication/Login";
import Signup from "./components/Authentication/Signup";
import PrivateRoute from "./components/private_route/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.scss";

function App() {
  const { user } = useSelector((state) => state.auth); // Check if user is logged in

  return (
    <div className="App">
      {/* Show Navbar only if user is logged in */}
      {/* {user && <NavBar />} */}
      <NavBar />

      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<ExploreAll />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/product/:id" element={<ProductDetails />} />

          {/* Authentication Routes */}
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={user ? <Navigate to="/" /> : <Signup />}
          />

          {/* Error Page */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>

      {/* Show Footer only if user is logged in */}
      {user && <Footer />}

      <ToastContainer position="top-right" />
    </div>
  );
}

export default App;
