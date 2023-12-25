import React from "react";
import TopBannar from "./TopBannar";
import FoodOptions from "./FoodOptions";
import PopularFoods from "./PopularFoods";
import EnjoyFoods from "./EnjoyFoods";
import Testimonial from "./Testimonial";

export default function Home() {
  return (
    <div>
      <TopBannar></TopBannar>
      <FoodOptions></FoodOptions>
      <PopularFoods></PopularFoods>
      <Testimonial></Testimonial>
      <EnjoyFoods></EnjoyFoods>
    </div>
  );
}
