import React from "react";
import "./Gallery.scss";
import galleryImg1 from "../../assets/gallery.jpg";
import galleryImg2 from "../../assets/gallery1.jpg";
import galleryImg3 from "../../assets/gallery2.jpg";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Gallery() {
  return (
    <div className="gallery_container">
      <div className="container">
        <h3 className="gallery_heading mt-5">Watch how we work</h3>
        <h5 className="gallery_subheading mb-3">
          Nisi fugiat et adipisicing laborum officia esse esse. Aliquip labore
          enim est est nostrud in sit. Culpa culpa laborum fugiat elit amet duis
          consectetur duis amet esse. Enim ea dolore quis excepteur consectetur.
          Ea eu id elit et. Nulla incididunt dolor adipisicing et amet aliqua
          consequat ullamco Lorem pariatur velit.
        </h5>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={galleryImg1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={galleryImg2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={galleryImg3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={galleryImg1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={galleryImg2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={galleryImg3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
