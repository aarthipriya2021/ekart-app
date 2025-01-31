import Slider from "../../components/slider/Slider";
import Category from "../../components/category/Category";
import ProductList from "../../components/productlist/ProductList";
import styles from "./home.module.scss"

const Home = () => {
  return (
    <div className={styles.mainWrapper}>
      <Slider />
      <Category />
      <ProductList />
    </div>
  )
}

export default Home;