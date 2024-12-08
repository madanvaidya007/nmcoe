import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const images = [
  {
    url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    title: "Campus View"
  },
  {
    url: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    title: "Academic Block"
  },
  {
    url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    title: "Library"
  }
];

const ImageSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      effect="fade"
      className="w-full h-screen"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-full">
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-green-900/50" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;