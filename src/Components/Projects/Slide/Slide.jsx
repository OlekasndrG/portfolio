import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { SlideContainer, StackContainer } from "./Slide.styled";

export const Slide = ({
  // eslint-disable-next-line react/prop-types
  name,
  // eslint-disable-next-line react/prop-types
  images,
  // eslint-disable-next-line react/prop-types
  description,
  // eslint-disable-next-line react/prop-types
  stack,
  // eslint-disable-next-line react/prop-types
  additional,
  // eslint-disable-next-line react/prop-types
  link,
}) => {
  // eslint-disable-next-line react/prop-types, no-unused-vars
  const [currentSlide, setCurrentSlide] = useState(0);
  // eslint-disable-next-line react/prop-types
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    // prevArrow: (
    //   <Button type="button">
    //     <SwipeRight />
    //   </Button>
    // ),
    // nextArrow: (
    //   <Button type="button">
    //     <SwipeLeft />
    //   </Button>
    // ),
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <SlideContainer>
      <h2>{name}</h2>
      <Slider {...settings}>
        {images?.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Image for ${name} number ${index}`} />
          </div>
        ))}
      </Slider>
      <p>{description}</p>
      <a href={link}>Link to Project</a>
      <StackContainer>
        <ul
          style={{
            
          }}
        >
          <span>Stack:</span>
          {stack?.map((item, index) => {
            return (
              <li style={{ listStyle: "inside" }} key={index}>
                <span>{item}</span>
              </li>
            );
          })}
        </ul>
        <ul
          style={{
            listStyle: "inside",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "initial",
          }}
        >
          <span>Additional packages used:</span>
          {additional?.map((item, index) => {
            return (
              <li style={{ listStyle: "inside" }} key={index}>
                <span>{item}</span>
              </li>
            );
          })}
        </ul>
      </StackContainer>
    </SlideContainer>
  );
};
Slide.propTypes = {
  images: PropTypes.array,
  stack: PropTypes.array,
  additional: PropTypes.array,
  optionalFunc: PropTypes.func,
};
