import { HiArrowLongLeft } from "react-icons/hi2";
import { HiArrowLongRight } from "react-icons/hi2";
import { cardData } from "../Data";
import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef, useState } from "react";

const cardList = cardData.map((data) => <Card data={data} key={data.id} />);

const Main = () => {
  const slickSlider = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = cardData.length;

  const nextSlide = () => {
    if (slickSlider.current) {
      slickSlider.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (slickSlider.current) {
      slickSlider.current.slickPrev();
    }
  };

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <section className="main">
      <div className="section-center">
        <div className="section-header">
          <div className="titles">
            <div className="tag">
              <hr className="tag-line" />
              <div className="tag-text">Blog</div>
            </div>
            <h2>exploring marketing tips</h2>
          </div>
          <div className="arrows">
            <button
              onClick={prevSlide}
              className={
                currentSlide === 0 ? "left-arrow disabled" : "left-arrow"
              }
              disabled={currentSlide === 0}
            >
              <HiArrowLongLeft />
            </button>
            <button
              onClick={nextSlide}
              className={
                currentSlide >= totalSlides - settings.slidesToShow
                  ? "right-arrow disabled"
                  : "right-arrow"
              }
              disabled={currentSlide >= totalSlides - settings.slidesToShow}
            >
              <HiArrowLongRight />
            </button>
          </div>
        </div>

        <div className="slider-parent">
          <Slider ref={slickSlider} {...settings}>
            {cardList}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Main;
