import { useDispatch } from "react-redux";
import { logout } from "../../Redux/auth/AuthSlice";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <NavLink
      onClick={handleLogout}
      className={`${styles.navLink} ${styles.menuLink}`}
    >
      Logout
    </NavLink>
  );
};

export default Logout;
