import React from "react";
import { Helmet } from "react-helmet-async";
import useCart from "./hooks/useCart";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

export default function MyCart() {
  const [cart, refetch] = useCart();

  const totalPrice = cart.reduce((sum, item) => item.price + sum, 0);

  const handleItemDelete = (item) => {
    console.log("you have to delete", item._id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            refetch();
          });

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <div className="w-full px-5">
      <Helmet>
        <title>Lu Cafeteria| Cart</title>
      </Helmet>
      <div className=" text-center  ">
        <h1 className="text-3xl mb-3">Total Items : {cart.length}</h1>
        <h1 className="text-3xl mb-3">Total Price : $ {totalPrice}</h1>
        <button className="btn  bg-[#D1A054] text-white ">PAY</button>
      </div>
      <div className="overflow-x-auto w-full  ">
        <table className="table w-full p-4    ">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {cart.map((row, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={row.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{row.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>$ {row.price}</td>

                  <th>
                    <button
                      className="btn  btn-error btn-md"
                      onClick={() => handleItemDelete(row)}
                    >
                      <FaTrash></FaTrash>
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
