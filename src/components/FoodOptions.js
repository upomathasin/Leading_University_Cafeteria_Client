import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
export default function FoodOptions() {
  return (
    <div className="px-4 mb-20">
      <div className="w-3/12 mx-auto  tab-bordered py-4 m-6">
        <h1 className="text-center text-white text-4xl uppercase py-2">
          Order Food
        </h1>
        <p className="text-yellow-600 text-center">---Taste the happiness---</p>
      </div>
      <div className=" m-5">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="fishFry.png" style={{ height: "400px" }} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src="cake.jpg" style={{ height: "400px" }} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src="chiken.png" style={{ height: "400px" }} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src="halim.jpg" style={{ height: "400px" }} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src="friedRice.png" style={{ height: "400px" }} />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src="fish carry.jpg" style={{ height: "400px" }} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
