import { useState, useEffect } from "react";
import ProductCard from "../productcard/ProductCard";
import { Container } from "react-bootstrap";
import styles from "./productlist.module.scss";
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { STATUS } from "../../constant/STATUS";
import { fetchProducts } from "../../Redux/product/ProductSlice";
// import { setCategory, setSearchProduct } from "../../Redux/productfilter/FilterSlice";
import {
  setCategory,
  setSearchProduct,
} from "../../Redux/productfilter/FilterSlice.js";

import Loader from "../loader/Loader";

const ProductList = () => {
  const [showSearch, setShowSearch] = useState(false);

  const dispatch = useDispatch();

  const { products, status } = useSelector((state) => state.products);
  const { searchedProduct, category } = useSelector(
    (state) => state.productFilter
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  let productsData;

  const categories = [
    {
      value: "all",
      name: "Find Product By Category",
    },
    {
      value: "MEN",
      name: "MEN",
    },
    {
      value: "WOMEN",
      name: "WOMEN",
    },
    {
      value: "JEWELERY",
      name: "ACCESSORIES",
    },
    {
      value: "ELECTRONICS",
      name: "ELECTRONICS",
    },
  ];

  if (searchedProduct) {
    productsData = products?.filter((item) =>
      item.title.toLowerCase().includes(searchedProduct.toLowerCase())
    );
  } else if (category.length > 0) {
    if (category.toLowerCase() === "all") {
      productsData = products;
    } else {
      productsData = products?.filter((item) =>
        item.category.toLowerCase().includes(category.toLowerCase())
      );
    }
  } else {
    productsData = products;
  }

  if (status === STATUS.LOADING) {
    return <Loader />;
  }

  if (status !== STATUS.LOADING && status === STATUS.ERROR) {
    return <h2>{status}</h2>;
  }

  return (
    <div className={styles.productListWrapper} id="product-list">
      <Container>
        <div className={styles.searchWrapper}>
          <div>
            <h3>Shop by Collection</h3>
            <p>
              Each season, we collaborate with world class designers to create a
              collection inspired by natural world.
            </p>
          </div>
          <div>
            {showSearch && (
              <input
                type="text"
                className={styles.searchBar}
                value={searchedProduct}
                onChange={(e) => dispatch(setSearchProduct(e.target.value))}
                placeholder="Search Product"
              />
            )}
            <BiSearch
              size={25}
              onClick={() => setShowSearch(!showSearch)}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <div className={styles.categorySelector}>
          <select
            className="form-select"
            aria-label="Default select example"
            defaultValue={category}
            onChange={(e) => dispatch(setCategory(e.target.value))}
          >
            {categories.map((option) => (
              <option value={option.value} key={option.value}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.productList}>
          {productsData?.map((product) => {
            return <ProductCard key={product?.id} product={product} />;
          })}
        </div>
      </Container>
    </div>
  );
};

export default ProductList;
