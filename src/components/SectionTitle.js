import React from "react";

export default function SectionTitle({ title, subHeading }) {
  return (
    <div className=" tab-bordered mx-auto w-4/12 py-4 text-center">
      <h1 className="text-yellow-600 text-3xl uppercase">{title}</h1>
      <h1 className="text-black-400">---{subHeading}---</h1>
    </div>
  );
}
