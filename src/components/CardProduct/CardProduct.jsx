/* eslint-disable react/prop-types */

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CardProduct.css'; 

const CardProduct = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <div
            className="product-image"
            style={{ backgroundImage: `url(${product.image})` }}
          />
          <div className="product-details">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default CardProduct;