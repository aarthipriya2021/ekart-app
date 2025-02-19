import styles from "./cart.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  removeAll,
  incrementProduct,
  reduceProduct,
} from "../../Redux/cart/CartSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import EmptyCart from "../../components/emptycart/EmptyCart";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user); // Get logged-in user from Redux

  // Calculate total price
  const totalPrice = products.cart.reduce(
    (a, c) => a + c.quantity * c.price,
    0
  );

  // Remove single product handler
  const removeProductHandler = (product) => {
    dispatch(removeFromCart(product));
    toast.warning(`${product.title.slice(0, 20)} is removed from cart`, {
      autoClose: 1000,
    });
  };

  // Remove all products
  const removeAllProduct = () => {
    dispatch(removeAll());
    toast.error("Your Cart is now empty", {
      autoClose: 1000,
    });
  };

  // Checkout function with authentication check
  const checkout = () => {
    if (!user) {
      navigate("/login", { state: { from: "/cart" } }); // Redirect to login with return path
    } else {
      toast.success("Order Placed Successfully");
      dispatch(removeAll());
      navigate("/");
    }
  };

  if (products.cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="container py-5 mt-4">
      <h2 className="py-3 text-center">Cart Page</h2>
      {products?.cart?.map((product) => {
        return (
          <div key={product.id} className={styles.cartCard}>
            <div>
              <img src={product.image} alt="product" width="50px" />
            </div>
            <div>
              <h5 style={{ maxWidth: "180px" }}>
                {product.title.slice(0, 20)}
              </h5>
              <h6>${product.price}</h6>
            </div>
            <div className="cartBtns">
              <button
                className={`${styles.cartBtn} fw-bold`}
                onClick={() => dispatch(incrementProduct(product))}
              >
                +
              </button>
              <h6>{product.quantity}</h6>
              <button
                className={`${styles.cartBtn} fw-bold`}
                onClick={() => dispatch(reduceProduct(product))}
              >
                -
              </button>
            </div>
            <div>
              <h6>${(product.price * product.quantity).toFixed(2)}</h6>
              <button
                className="btn btn-danger"
                onClick={() => removeProductHandler(product)}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}

      <hr />
      <div className="mb-5 d-flex justify-content-between">
        <button className={styles.cartBtn} onClick={removeAllProduct}>
          Remove All items
        </button>
        <h5>
          Total Price: <b>${totalPrice.toFixed(2)}</b>
        </h5>
      </div>
      <div>
        <button className={styles.checkoutBtn} onClick={checkout}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
