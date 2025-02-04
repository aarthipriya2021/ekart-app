import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/auth/AuthSlice";
import logo from "../../assets/logo_white.png";
import styles from "./navbar.module.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout()); // Remove user from Redux store
    navigate("/login"); // Redirect to login page
  };

  const menus = [
    { name: "Home", id: 1, path: "/" },
    { name: "Explore All", id: 2, path: "/explore" },
    { name: "WishList", id: 3, path: "/wishlist" },
  ];

  return (
    <div>
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
              {menus.map((menu) => (
                <NavLink
                  key={menu.id}
                  to={menu.path}
                  className={`${styles.navLink} ${styles.menuLink}`}
                >
                  {menu.name}
                </NavLink>
              ))}

              {/* Cart Icon */}
              <NavLink
                to="/cart"
                className={`${styles.navLink} ${styles.cartIcon}`}
              >
                <AiOutlineShoppingCart size={23} />
                <div className={styles.cartLength}>
                  <h6>{cart?.length || 0}</h6>
                </div>
              </NavLink>

              {/* Login/Logout Button */}
              {user ? (
                <NavLink
                  className={`${styles.navLink} ${styles.menuLink}`}
                  onClick={handleLogout}
                >
                  Logout
                </NavLink>
              ) : (
                <NavLink
                  to="/login"
                  className={`${styles.navLink} ${styles.menuLink}`}
                >
                  Login
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
