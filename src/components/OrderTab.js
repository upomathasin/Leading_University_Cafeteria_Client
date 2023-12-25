import React from "react";
import FoodCard from "./FoodCard";
export default function OrderTab({ items }) {
  console.log(items);
  return (
    <div className="grid md: grid-cols-3 gap-10">
      {items.map((item) => {
        return <FoodCard item={item} />;
      })}
    </div>
  );
}
