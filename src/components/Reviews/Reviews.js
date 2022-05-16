import React from "react";
import "./Reviews.scss";
import reviewImg from "../../assets/Image.png";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Reviews() {
  return (
    <div className="reviews_container text-center">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="reviews_swiper"
      >
        <SwiperSlide>
          <blockquote className="blockquote container">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.Velit sint adipisicing elit mollit velit nisi
              non nisi exercitation eu enim.
            </p>
            <footer className="blockquote-footer">
              Someone from <cite title="Source Title">Company Name</cite>
            </footer>
          </blockquote>
          <img src={reviewImg} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <blockquote className="blockquote container">
            <p>
              Consectetur laboris voluptate eu eu enim labore elit ut excepteur
              veniam pariatur. Laboris voluptate cillum quis laborum officia
              eiusmod officia culpa minim nostrud. Ex aliquip veniam proident id
              nulla et minim. Est cillum est velit nostrud sit velit nisi cillum
              commodo esse fugiat ullamco. In culpa nisi commodo irure ea
              cupidatat magna excepteur ex laborum Lorem nostrud consequat aute.
            </p>
            <footer className="blockquote-footer">
              Someone from <cite title="Source Title">Company Name</cite>
            </footer>
          </blockquote>
          <img src={reviewImg} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <blockquote className="blockquote container">
            <p>
              Sit occaecat eiusmod eiusmod velit mollit velit consequat in
              commodo et. Velit sunt sint Lorem laboris minim eiusmod qui irure
              sit. Ex amet ad aute sunt.
            </p>
            <footer className="blockquote-footer">
              Someone from <cite title="Source Title">Company Name</cite>
            </footer>
          </blockquote>
          <img src={reviewImg} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <blockquote className="blockquote container">
            <p>
              Adipisicing quis esse et ea. Incididunt minim qui reprehenderit
              aute anim deserunt sit consectetur qui reprehenderit.
            </p>
            <footer className="blockquote-footer">
              Someone from <cite title="Source Title">Company Name</cite>
            </footer>
          </blockquote>
          <img src={reviewImg} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
