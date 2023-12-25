import React from "react";

export default function AddFood() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-center">
          <h1 className="text-5xl font-bold ">Add Food !</h1>
          <p className="py-6">
            Add Food new food products available at your cafeteria !!
          </p>
        </div>
        <div className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Food Name</span>
              </label>
              <input
                type="text"
                placeholder="food_name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Food Price</span>
              </label>
              <input
                type="text"
                placeholder="food_price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Food Description</span>
              </label>
              <input
                type="text"
                placeholder="food_description"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-green-700">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
