import React, { useState, useEffect } from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import noPicture from "./images/no-picture.png";
import defaultPic from "./images/images.jpg";
import defaultPic1 from "./images/images1.jpg";
import defaultPic2 from "./images/images2.jpg";


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
      image ? (<div className="gallery">
      <Swiper {...gallerySwiperParams}>
        <div className="item-gallery" style={{ backgroundImage:`url(${image})`}} />
        <div className="item-gallery" style={{ backgroundImage:`url(${defaultPic})`}} />
        <div className="item-gallery" style={{ backgroundImage:`url(${defaultPic1})`}} />
        <div className="item-gallery" style={{ backgroundImage:`url(${defaultPic2})`}} />

      </Swiper>
      <Swiper {...thumbnailSwiperParams}>
        <div className = "item-thumbnail" style={{ backgroundImage:`url(${image})` }} />
        <div className = "item-thumbnail" style={{ backgroundImage:`url(${defaultPic})` }} />
        <div className = "item-thumbnail" style={{ backgroundImage:`url(${defaultPic1})` }} />
        <div className = "item-thumbnail" style={{ backgroundImage:`url(${defaultPic2})` }} />

      </Swiper>
    </div>) :
        <img src = {noPicture} alt="" />
  );
};
export default Gallery;