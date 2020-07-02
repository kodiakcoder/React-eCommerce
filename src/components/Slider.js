import React from "react";

const Slider = ({ imageURL, title, link }) => {
  return (
    <div
      className="h-screen bg-center bg-no-repeat bg-contain bg-gray-200"
      style={{
        backgroundImage: `url(${imageURL})`,
      }}
    >
      <h1 className="text-4xl md:pt-64 md:px-16 md:mb-4">{title}</h1>

      <a
        className="px-2 py-4 bg-gray-400 text-2xl md:mx-16 hover:underline"
        href={link}
      >
        Shop Now
      </a>
    </div>
  );
};

export default Slider;
