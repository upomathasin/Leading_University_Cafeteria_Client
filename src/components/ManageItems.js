import React, { useContext } from "react";
import SectionTitle from "./SectionTitle";
import useMenu from "./hooks/useMenu";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

export default function ManageItems() {
  const [menu, refetch] = useMenu();
  const { user } = useContext(AuthContext);
  const handleDelete = (item) => {
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
        fetch(`http://localhost:5000/menu/${item._id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("access_token")}`,
            email: user.email,
          },
        }).then((data) => {
          refetch();
          console.log(data);
          Swal.fire("Deleted!", "Item has been deleted.", "success");
        });
      }
    });
  };
  return (
    <div className="w-full p-5">
      <SectionTitle title="Manage Items" subHeading="Hurry Up"></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <h1>#</h1>
                </label>
              </th>

              <th>Item</th>
              <th>Category</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {menu.map((item, index) => {
              return (
                <tr key={item._id}>
                  <th>
                    <h1>{index + 1}</h1>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.image} alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.name}</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>{item.category}</td>
                  <td>{item.price}</td>
                  <td>
                    <button className="btn btn-success btn-md">
                      <FaEdit></FaEdit>
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn  btn-error btn-md "
                      onClick={() => handleDelete(item)}
                    >
                      <FaTrash></FaTrash>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
