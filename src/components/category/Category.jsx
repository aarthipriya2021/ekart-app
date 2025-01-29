import cat1 from "../../assets/men.jpg"; 
import cat2 from "../../assets/women.jpg"; 
import cat3 from "../../assets/electronics.jpg"
import cat4 from "../../assets/accessories.jpg"; 
import styles from "./Category.module.scss"

const Category = () => {
  const categories = [
    {
      img: cat1,
      name: "MEN",
      id: 1,
    },
    {
      img: cat2,
      name: "WOMEN",
      id: 2,
    },
    {
      img: cat4,
      name: "ACCESSORIES",
      id: 3,
    },
    {
      img: cat3,
      name: "ELECTRONICS",
      id: 4,
    },
  ];
  return (
    <div className="pt-5 container">
      <h3 className="py-2">Shop by Caterogry</h3>
      <div className={`${styles.categoryWrapper}`}>
        {categories.map((Category) => {
          return (
            <div key={Category.id}>
              <div
                className="category"
                style={{
                  background: `linear-gradient(rgba(20,20,20, 0.3),rgba(20,20,20, .3)), url(${Category.img}) no-repeat`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h5 className="text-white px-3">
                  {Category.name.toUpperCase()}
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Category