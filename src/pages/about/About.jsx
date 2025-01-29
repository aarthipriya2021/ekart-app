import { useState, useEffect } from "react";
import ProductCard from "../../components/productcard/ProductCard";
import styles from "./about.module.scss";
import { Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { STATUS } from "../../constant/STATUS";
import { fetchProducts } from "../../Redux/product/ProductSlice";
// import { setCategory, setSearchProduct } from "../../Redux/productfilter/FilterSlice";
import { setCategory, setSearchProduct } from "../../Redux/productfilter/filterslice";
import Loader from "../../components/loader/Loader";




const About = () => {
  const [showSearch, setShowSearch] = useState(true);

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
        <h2 className="text-center py-3">Products</h2>
        <div className={styles.searchWrapper}>
          <div>
            {showSearch && (
              <Form.Control 
                type="text" 
                // placeholder={<BiSearch size={25} style={{ cursor: "pointer" }}  />}
                placeholder="Search Product"
                className={styles.searchBar} 
                value={searchedProduct} 
                onChange={(e) => dispatch(setSearchProduct(e.target.value))}
                />
                
            )}
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

export default About;
