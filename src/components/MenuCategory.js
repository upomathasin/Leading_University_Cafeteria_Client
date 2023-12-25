import React from "react";
import Cover from "./Cover";
import SectionTitle from "./SectionTitle";
import { Link } from "react-router-dom";
export default function MenuCategory({ items, title }) {
  const paramTitle = title.toLowerCase();
  return (
    <div className="pt-9  flex flex-col justify-center items-center">
      <div className="grid md:grid-cols-2 sm:grid-cols-1           gap-5 p-4 ">
        {items.map((item) => {
          return (
            <div className="flex space-x-4" key={item._id}>
              <img
                src={item.image}
                className="w-[100px]"
                style={{ borderRadius: "200px 200px 200px 0px" }}
              />
              <div>
                <h1 className="text-2xl">{item.name}--------</h1>
                <h1 className="text-md">{item.recipe}</h1>
              </div>

              <h1>${item.price}</h1>
            </div>
          );
        })}
      </div>
      <Link to={`/order/${title}`} className="py-5 mt-5">
        <button className="btn  te border-b-2 text-yellow-100 bg-amber-500 flex justify-center items-center">
          Order Now
        </button>
      </Link>
    </div>
  );
}
