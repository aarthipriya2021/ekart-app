import { Carousel, Button } from "react-bootstrap";
import hero_1 from "../../assets/hero_1.png";
import hero_2 from "../../assets/hero_2.png";
import hero_3 from "../../assets/hero_3.png";
import hero_4 from "../../assets/hero_4.png";
import styles from  "./slider.module.scss";

const Slider = () => {
  const sliderItems = [
    {
      id: 1,
      caption: "E-Kart- Shopping Partner",
      img: hero_1,
    },
    {
      id: 2,
      caption: "Shop More, Save More!",
      img: hero_2,
    },
    {
      id: 3,
      caption: "Everything You Need, \n Delivered",
      img: hero_3,
    },
    {
      id: 4,
      caption: "Cart It, Love It.",
      img: hero_4,
    },
  ];
  return (
    <div>
      <Carousel fade={true} className={styles.slider}>
        {sliderItems.map((item) => {
          return (
            <Carousel.Item key={item.id} className={styles.sliderItem}>
              <img className="d-block w-100" src={item.img} alt="First slide" />
              <Carousel.Caption className={styles.sliderCaption}>
                <h1
                  style={{
                    color: "white" ,
                    fontSize: "85px",
                    lineHeight: "100px",
                    fontWeight: "900",
                    width:"1000px",
                    textAlign:"center",
                    paddingBottom:"30px"
                  }}
                >
                  {item.caption}
                </h1>
                <p
                  style={{
                    paddingBottom:"20px"
                  }}
                >
                Experience shopping like never before with E-Kart – where great deals meet convenience!
                </p>
                <Button className={styles.sliderBtn}>
                  <a href="#product-list">Discover More</a>
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  )
}

export default Slider;