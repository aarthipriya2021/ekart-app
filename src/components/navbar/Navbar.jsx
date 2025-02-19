import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/auth/AuthSlice";
import { removeAll } from "../../Redux/cart/CartSlice";
import logo from "../../assets/logo_white.png";
import styles from "./navbar.module.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); // Get current location
  const { user } = useSelector((state) => state.auth);
  const cartItems = useSelector((state) => state.cart.cart.length);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(removeAll());
    navigate("/"); // Redirect to home after logout
  };

  // Handle Cart Click
  const handleCartClick = (e) => {
    e.preventDefault();
    if (user) {
      navigate("/cart");
    } else {
      navigate("/login", { state: { from: location.pathname } }); // Save current page
    }
  };

  return (
    <Navbar expand="lg" className={`${styles.navBar} fixed-top`}>
      <Container>
        <Navbar.Brand>
          <NavLink to="/" className={`${styles.navLink} text-uppercase`}>
            <img src={logo} alt="logo" width={130} height={30} />
          </NavLink>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
            <NavLink to="/" className={`${styles.navLink} ${styles.menuLink}`}>
              Home
            </NavLink>
            <NavLink to="/explore" className={`${styles.navLink} ${styles.menuLink}`}>
              Explore All
            </NavLink>
            <NavLink to="/wishlist" className={`${styles.navLink} ${styles.menuLink}`}>
              WishList
            </NavLink>

            {/* Cart Icon */}
            <NavLink className={`${styles.navLink} ${styles.cartIcon}`} onClick={handleCartClick}>
              <AiOutlineShoppingCart size={23} />
              {user && cartItems > 0 && (
                <div className={styles.cartLength}>
                  <h6>{cartItems}</h6>
                </div>
              )}
            </NavLink>

            {/* Login/Logout Button */}
            {user ? (
              <button onClick={handleLogout} className={`${styles.navLink} ${styles.menuLink}`}>
                Logout
              </button>
            ) : (
              <button onClick={() => navigate("/login", { state: { from: location.pathname } })} className={`${styles.navLink} ${styles.menuLink}`}>
                Login
              </button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
