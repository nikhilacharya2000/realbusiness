import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from '../assests/images/CardsImage/ajay.jpg';
import image2 from '../assests/images/CardsImage/alia.jpg';
import image3 from '../assests/images/CardsImage/karina.jpg';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const imageStyle = {
    height: '500px', // Set the desired height
    width: '100%' // Set the desired width
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={image1} alt="Image 1" style={imageStyle} />
      </div>
      <div>
        <img src={image2} alt="Image 2" style={imageStyle} />
      </div>
      <div>
        <img src={image3} alt="Image 3" style={imageStyle} />
      </div>
    </Slider>
  );
};

export default ImageSlider;