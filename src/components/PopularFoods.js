import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import SectionTitle from "./SectionTitle";

export default function PopularFoods() {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setFoods(data.filter((food) => food.category === "popular"));
      });
  }, []);
  return (
    <div className="mb-20">
      <SectionTitle
        title="Our Most demanding Foods"
        subHeading="Popular Items"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 sm:grid-cols-1           gap-5 p-4">
        {foods.map((food) => {
          return (
            <div className="flex space-x-4">
              <img
                src={food.image}
                className="w-[100px]"
                style={{ borderRadius: "200px 200px 200px 0px" }}
              />
              <div>
                <h1 className="text-2xl">{food.name}--------</h1>
                <h1 className="text-md">{food.recipe}</h1>
              </div>

              <h1>${food.price}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
