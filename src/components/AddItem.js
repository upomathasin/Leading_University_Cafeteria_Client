import React, { useContext } from "react";
import SectionTitle from "./SectionTitle";
import Menu from "./Menu";
import { useForm } from "react-hook-form";
import { FaUtensilSpoon, FaUtensils } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";
export default function AddItem() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { user } = useContext(AuthContext);
  const imgHostingToken = "415a76abfe306db0da9996712828a611";
  const imgPostUrl = `https://api.imgbb.com/1/upload?expiration=600&key=${imgHostingToken}`;
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(imgPostUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const { name, price, category, image } = data;
          const newItem = {
            name,
            category,
            price: parseFloat(price),
            image: imgData.data.display_url,
          };
          console.log(newItem);

          fetch(`http://localhost:5000/menu`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("access_token")}`,
              email: user.email,
            },
            body: JSON.stringify(newItem),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                Swal.fire({
                  title: "Item Added Successfully !",
                  showClass: {
                    popup: "animate__animated animate__fadeInDown",
                  },
                  hideClass: {
                    popup: "animate__animated animate__fadeOutUp",
                  },
                });
              }
            });
        }
      });
  };
  return (
    <div className=" w-full px-12">
      <div className="flex flex-col justify-center items-center w-full  bg-slate-700 ">
        <SectionTitle
          title="Add New Items"
          subHeading="What's New "
        ></SectionTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-[700px]   p-9 m-8 mt-5">
            <label className="label">
              <span className="label-text font-bold">Recipe Name*</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
              {...register("name")}
            />
            <div className="flex justify-center items-center">
              <div className="form-control w-full max-w-xs  ">
                <label className="label">
                  <span className="label-text font-bold">Category*</span>
                </label>
                <select
                  {...register("category", { required: true })}
                  className="select select-bordered w-full max-w-xs"
                >
                  <option disabled defaultValue="Pick One" selected>
                    Pick One
                  </option>
                  <option>Pizza</option>
                  <option>Soup</option>
                  <option>Salad</option>
                  <option>Desert</option>
                  <option>Drinks</option>
                </select>
              </div>
              <div className="form-control w-full max-w-xs ">
                <label className="label">
                  <span className="label-text font-bold">Price*</span>
                </label>
                <input
                  {...register("price", { required: true })}
                  type="number"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>
            <div className="form-control w-full  ">
              <label className="label">
                <span className="label-text font-bold">Recipe Details*</span>
              </label>
            </div>
            <div className="form-control w-full ">
              <textarea
                {...register("recipe", { required: true })}
                className="textarea textarea-bordered w-full  "
                placeholder="Recipe Details"
              ></textarea>
              <label className="label">
                <span className="label-text font-bold">Add Picture*</span>
              </label>
              <input
                {...register("image", { required: true })}
                type="file"
                className="file-input file-input-bordered file-input-warning w-full "
              />
            </div>
            <div className="w-full flex justify-center items-center mt-4">
              <button
                type="submit"
                className="btn btn-outline btn-warning w-[200px] "
              >
                Add Item <FaUtensils></FaUtensils>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
