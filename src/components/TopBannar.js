import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function () {
  return (
    <div className="h-100">
      <Carousel>
        <div>
          <img src="02.jpg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="03.png" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="06.png" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
}
