import { memo, useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';
import useFetch from '../../services/usefetch';
import Loader from "../loader/Loader";
import ProductCard from "../productcard/ProductCard";



const ProductSlider = ({ category }) => {
  const [size, setSize] = useState("");
  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  //fetch slider data according to category
  const { data, error, loading } = useFetch(`/category/${category}`);

  if (!error && loading) {
    return <Loader />;
  }
  if (!loading && error) {
    return <h3>{error.message}</h3>;
  }

  return (
    <div className="product-slider">
      <Carousel itemsToShow={size <= 767 ? 1 : 3} itemPadding={[10, 10]}>
        {data?.map((product) => (
          <div className="carousel-item-wrapper" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

ProductSlider.propTypes = {
    category: PropTypes.string.isRequired, // Ensure 'category' is a string and required
};

export default memo(ProductSlider);
