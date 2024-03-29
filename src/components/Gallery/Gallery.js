import React from "react";
import "./Gallery.scss";
import galleryImg1 from "../../assets/gallery.jpg";
import galleryImg2 from "../../assets/gallery1.jpg";
import galleryImg3 from "../../assets/gallery2.jpg";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Gallery() {
  return (
    <div className="gallery_container d-flex flex-column align-items-center">
      <div className="container">
        <h3 className="gallery_heading mt-5 text-center">Watch how we work</h3>
        <h5 className="gallery_subheading mb-3">
          Nisi fugiat et adipisicing laborum officia esse esse. Aliquip labore
          enim est est nostrud in sit. Culpa culpa laborum fugiat elit amet duis
          consectetur duis amet esse. Enim ea dolore quis excepteur consectetur.
          Ea eu id elit et. Nulla incididunt dolor adipisicing et amet aliqua
          consequat ullamco Lorem pariatur velit.
        </h5>
      </div>
      <Swiper
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
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
      <div className="btn gallery_btn mt-4">
        <NavLink to="/gallery" className="nav-link active ">
          See more
        </NavLink>
      </div>
    </div>
  );
}
