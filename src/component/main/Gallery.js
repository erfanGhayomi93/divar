import React, { useState, useEffect } from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

const Gallery = ({image}) => {
  const [gallerySwiper, getGallerySwiper] = useState(null);
  const [thumbnailSwiper, getThumbnailSwiper] = useState(null);

  const gallerySwiperParams = {
    getSwiper: getGallerySwiper,
    spaceBetween: 10,
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // }
  };

  const thumbnailSwiperParams = {
    getSwiper: getThumbnailSwiper,
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true
  };

  useEffect(() => {
    if (
      gallerySwiper !== null &&
      gallerySwiper.controller &&
      thumbnailSwiper !== null &&
      thumbnailSwiper.controller
    ) {
      gallerySwiper.controller.control = thumbnailSwiper;
      thumbnailSwiper.controller.control = gallerySwiper;
    }
  }, [gallerySwiper, thumbnailSwiper]);
  return (
    <div className="gallery">
      <Swiper {...gallerySwiperParams}>
        <div className="item-gallery" style={{ backgroundImage:`url(${image})` }} />
        <div className="item-gallery" style={{ backgroundImage:'url(http://lorempixel.com/600/600/nature/2)' }} />
        <div className="item-gallery" style={{ backgroundImage:'url(http://lorempixel.com/600/600/nature/3)' }} />
        <div className="item-gallery" style={{ backgroundImage:'url(http://lorempixel.com/600/600/nature/4)' }} />

      </Swiper>
      <Swiper {...thumbnailSwiperParams}>
        <div className = "item-thumbnail" style={{ backgroundImage:`url(${image})` }} />
        <div className = "item-thumbnail" style={{ backgroundImage:'url(http://lorempixel.com/300/300/nature/2)' }} />
        <div className = "item-thumbnail" style={{ backgroundImage:'url(http://lorempixel.com/300/300/nature/3)' }} />
        <div className = "item-thumbnail" style={{ backgroundImage:'url(http://lorempixel.com/300/300/nature/4)' }} />

      </Swiper>
    </div>
  );
};
export default Gallery;