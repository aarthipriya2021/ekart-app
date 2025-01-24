import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo_white.png";
import styles from "./navbar.module.scss";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";

const NavBar = () => {

  const { cart } = useSelector((state) => state.cart);

  const menus = [
    {
      name: "Home",
      id: 1,
      path: "/",
    },
    {
      name: "Explore All",
      id: 2,
      path: "/about",
    },
    {
      name: "WishList",
      id: 3,
      path: "/wishlist",
    },
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
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {menus.map((menu) => (
                <NavLink
                  to={menu.path}
                  key={menu.id}
                  className={`${styles.navLink} ${styles.menuLink}`}
                >
                  {menu.name}
                </NavLink>
              ))}

              <NavLink
                to="/cart"
                className={`${styles.navLink} ${styles.cartIcon}`}
              >
                <AiOutlineShoppingCart size={23} />{" "}
                <div className={styles.cartLength}>
                  <h6>{cart?.length}</h6>
                </div>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
