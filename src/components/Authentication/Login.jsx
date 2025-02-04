import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/auth/AuthSlice";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss"; // Import SCSS file

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Dispatch both email and password to Redux
    dispatch(login({ email, password }));

    if (localStorage.getItem("user")) {
      // If user is stored, navigate to home
      navigate("/");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className={styles.formGroup}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.loginBtn}>
            Login
          </button>
        </form>
        <p>e-mail : admin@test.com && password : admin</p>
      </div>
    </div>
  );
};

export default Login;
