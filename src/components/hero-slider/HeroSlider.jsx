import React from "react";
import "./slider.css";
import { Container } from "reactstrap";
import Slider from "react-slick";

import { sliderData } from "../../assets/fake-data/slider";
const HeroSlider = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <section id="home">
      <Container>
        <Slider {...settings}>
          {sliderData.map((item) => (
            <div
              key={item.id}
              className="slider__wrapper d-flex align-items-center justify-content-between pt-5"
            >
              <div className="slider__content w-50 ps-2">
                <h2 className="mb-3">{item.title}</h2>
                <p>{item.desc}</p>
                <button className="btn">Explore Food</button>
              </div>

              <div className="slider__img w-50">
                <img src={item.imgUrl} className="w-100" alt="" />
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default HeroSlider;
