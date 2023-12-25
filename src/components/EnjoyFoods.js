import React from "react";

export default function EnjoyFoods() {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url(featured.jpg)" }}
      >
        <div className="hero-overlay bg-fi"></div>
        <div className="hero-content  text-neutral-content">
          <div className="grid md: grid-cols-2 ">
            <img src="featured.jpg" className="w-[500px]" />
            <div className="text-center my-auto">
              <h1 className="mb-5 text-5xl font-bold text-yellow-500">
                Enjoy your food
              </h1>

              <p className="mb-5 text-white">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn bg-yellow-600 border-0 text-white">
                Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
