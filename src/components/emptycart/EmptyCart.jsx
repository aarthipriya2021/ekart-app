import styles from "./emptycart.module.scss";
import { useNavigate } from "react-router-dom";
import cartEmpty from "../../assets/cartEmpty.jpg";

const EmptyCart = () => {
    const navigate = useNavigate();
    return (
      <div className={styles.container}>
        <div className={styles.emptyCart}>
          <img src={cartEmpty} alt="empty-cart-img" width="400px" height="300px"/>
          <h1 style={{ color: "#2874F0", paddingBottom:"20px"}}>No Items in your cart</h1>
          <button className="btn btn-primary" onClick={() => navigate("/")}>
            Go Back to Add Some Products
          </button>
        </div>
      </div>
    )
}

export default EmptyCart;