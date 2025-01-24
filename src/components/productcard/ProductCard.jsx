import { memo } from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import styles from "./productcard.module.scss";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/cart/CartSlice";

const ProductCard = ({ product }) => {

  const title = product?.title.slice(0, 20);
  const dispatch = useDispatch();
  //const cartItems = useSelector((state) => state.cart.cart);

  const navigate = useNavigate();

  //add product to cart handler
  const addProduct = () => {
    dispatch(addToCart(product));
    toast.success(`${product?.title.slice(0, 20)} is added to cart`, {
      autoClose: 1000,
    });
  };

  return (
    <div>
      <Card
        style={{ width: "18rem", textAlign: "center" }}
        className={styles.productCard}
      >
        <Card.Img
          onClick={() => navigate(`/product/${product?.id}`)}
          variant="top"
          src={product?.image}
          className={styles.cardImg}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>${product?.price}</Card.Text>
          <Button className={styles.commonBtn} onClick={addProduct}>
            ADD TO CART
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default memo(ProductCard);