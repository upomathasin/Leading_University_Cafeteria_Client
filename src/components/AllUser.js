import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import { FaTrash, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

export default function AllUser() {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const result = await fetch("http://localhost:5000/users", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      return result.json();
    },
  });

  const handleUserDelete = (user) => {
    console.log(user);
  };

  const handleMakeAdmin = async (user) => {
    await fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user.name} is a Admin now !!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className=" w-full  ">
      <Helmet>
        <title>Leading University Cafeteria || All Users</title>
      </Helmet>
      <h1 className="text-white  font-semibold my-6">
        {" "}
        Total User : {users.length}
      </h1>

      <div className="overflow-x-auto ">
        <table className="table  table-zebra-zebra ">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => {
              return (
                <tr>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button
                        className="btn   bg-orange-400 text-gray-800 btn-md "
                        onClick={() => handleMakeAdmin(user)}
                      >
                        <FaUserShield></FaUserShield>
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      className="btn  btn-error btn-md "
                      onClick={() => handleUserDelete(user)}
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
