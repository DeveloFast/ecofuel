/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CardProduct.css"

// eslint-disable-next-line react/prop-types
const CarProduct = ({ productos }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="container-card-product">
      <Slider {...settings}>
        {productos.map((producto) => (
          <div   className="card-product" key={producto.id}>
          <div>

          <img src={producto.image}/>
          </div>
        <div className="card-product-content">
            <h2>{producto.name}</h2>
            <p>{producto.description}</p>

        </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarProduct;