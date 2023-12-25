import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import useCart from "./hooks/useCart";

export default function ({ item }) {
  const { name, image, price, recipe } = item;
  const { user } = useContext(AuthContext);

  const [, refetch] = useCart();
  const handleAddToCart = (item) => {
    const cartItem = {
      foodId: item._id,
      name,
      image,
      price,
      email: user.email,
    };
    console.log("handle add : ", cartItem);
    if (user) {
      fetch("http://localhost:5000/carts", {
        method: "POST",
        body: JSON.stringify(cartItem),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res)
        .then((data) => {
          refetch();
          if (data) {
            Swal.fire("Successfully Added to the cart !");
          }
        });
    } else {
      Swal.fire("Please login to add to cart !");
    }
  };
  return (
    <div>
      <div className="card w-96 bg-base-200 shadow-xl ">
        <figure className="px-10 pt-10">
          <img src={image} alt="iamge" className="rounded-xl" />
        </figure>
        <h3 className="font-bold bg-slate-700 p-2 rounded text-white  absolute right-0 mr-12 mt-12">
          ${price}
        </h3>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>

          <div className="card-actions">
            <Link>
              {" "}
              <button
                className="btn btn-success"
                onClick={() => handleAddToCart(item)}
              >
                Add To Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
