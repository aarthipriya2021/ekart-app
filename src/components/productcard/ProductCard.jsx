import { memo } from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import styles from "./productcard.module.scss";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../Redux/cart/CartSlice";
import { addToWishList, removeFromWishList } from "../../Redux/wishlist/WishListSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get cart and wishlist state
  const cartItems = useSelector((state) => state.cart.cart);
  const wishListItems = useSelector((state) => state.wishlist.wishList);

  // Check if the product is in the cart or wishlist
  const isInCart = cartItems.some((item) => item.id === product.id);
  const isInWishList = wishListItems.some((item) => item.id === product.id);

  // Toggle cart state
  const handleCart = () => {
    if (isInCart) {
      dispatch(removeFromCart(product));
      toast.warning(`${product?.title.slice(0, 20)} removed from cart`, { autoClose: 1000 });
    } else {
      dispatch(addToCart(product));
      toast.success(`${product?.title.slice(0, 20)} added to cart`, { autoClose: 1000 });
    }
  };

  // Toggle wishlist state
  const handleWishlist = () => {
    if (isInWishList) {
      dispatch(removeFromWishList(product));
      toast.warning(`${product?.title.slice(0, 20)} removed from wishlist`, { autoClose: 1000 });
    } else {
      dispatch(addToWishList(product));
      toast.success(`${product?.title.slice(0, 20)} added to wishlist`, { autoClose: 1000 });
    }
  };

  return (
    <Card className={styles.productCard} onClick={() => navigate(`/product/${product?.id}`)}>
      <Card.Img variant="top" src={product?.image} className={styles.cardImg} />
      <Card.Body>
        <Card.Title>{product?.title.slice(0, 20)}</Card.Title>
        <Card.Text>${product?.price}</Card.Text>
        <div className={styles.cardButtons}>
          <Button className={styles.commonBtn} onClick={handleCart}>
            {isInCart ? "REMOVE FROM CART" : "ADD TO CART"}
          </Button>
          <button className={styles.heartBtn} onClick={handleWishlist}>
            <FaHeart color={isInWishList ? "red" : "gray"} size={24} />
          </button>
        </div>
      </Card.Body>
    </Card>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default memo(ProductCard);
