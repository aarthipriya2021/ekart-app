// import React from 'react'
import styles from "./wishlist.module.scss";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/productcard/ProductCard";
import noitem from "../../assets/empty_wishlist.jpg";
import { removeAll } from "../../Redux/wishlist/WishListSlice";

const WishList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.wishlist);
  const content =
    products?.wishList?.length > 0 ? (
      products?.wishList?.map((product) => {
        return <ProductCard key={product?.id} product={product} />;
      })
    ) : (
      <div className={styles.noitemimage}>
        <img src={noitem} alt="wishlist empty" width="300px" height="300px" />
        <h1 style={{ color: "#2874F0"}}>No Items in Wishlist</h1>
      </div>
    );
  return (
    <div className={`container`}>
      <div className={styles.wishListWrapper}>
        <h2 className="text-center py-3">My WishList</h2>
        <div
          className={
            products?.wishList?.length > 0 ? styles.wishListItemWrapper : ""
          }
        >
          {content}
        </div>
        {products?.wishList?.length > 0 && (
          <button
            className={`${styles.wishListBtn}`}
            onClick={() => dispatch(removeAll())}
          >
            Remove all from Wishlist
          </button>
        )}
      </div>
    </div>
  );
};

export default WishList;