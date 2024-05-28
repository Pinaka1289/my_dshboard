import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MyStocksCard from "./MyStocksCard";

const MyStocksCarousel = ({ stocks }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      infinite
      autoPlay
      autoPlaySpeed={3000}
      keyBoardControl
      customTransition="all 2s ease"
      transitionDuration={2000}
      containerClass="carousel-container"
      arrows={false}
      itemClass="carousel-item-padding-40-px fade"
      renderDotsOutside
    >
      {stocks.map((stock, index) => (
        <MyStocksCard key={stock.trade_id} stock={stock} index={index} />
      ))}
    </Carousel>
  );
};

export default MyStocksCarousel;
