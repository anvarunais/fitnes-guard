import React, { useRef, useState } from "react";
import "./Servicedestination";
import "bootstrap/dist/css/bootstrap.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Servicedestination.css";
import Imageone from "../assets/collabs-1.png";
import Imagetwo from "../assets/collabs-2.png";
import Imagethree from "../assets/collabs-3.png";
import Imagefour from "../assets/collabs-4.png";

import { EffectCoverflow, Pagination } from "swiper/modules";

const Servicedestination = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Imageone} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Imagetwo} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Imagethree} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Imagefour} />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide> */}
      </Swiper>

      <a
        className="link"
        href="https://www.instagram.com/reel/C9AEBKMONVy/?igsh=MW0ycXd1YjhtNmw4bA=="
        target="_blank"
      >
        Watch More..
      </a>
    </>
  );
};

export default Servicedestination;
