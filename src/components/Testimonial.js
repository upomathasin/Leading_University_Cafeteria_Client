import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useEffect } from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
export default function () {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <div className="my-20">
      <SectionTitle subHeading="What our client say" title="Testimonial" />
      <p className=" text-center text-lg">
        {" "}
        Reviews: <span className=" text-orange-400">{reviews.length}</span>{" "}
      </p>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => {
          console.log(review.name);

          return (
            <SwiperSlide>
              <div className="flex flex-col justify-between items-center  m-40">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <p>{review.details}</p>
                <h1 className="font-bold text-orange-500">{review.name}</h1>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
