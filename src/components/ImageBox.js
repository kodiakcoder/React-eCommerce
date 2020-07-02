import React from "react";

const ImageBox = ({ image, title, link }) => {
  return (
    <div className="my-8 ml-4 mr-4 h-128 max-w-lg bg-green-300 relative">
      <img className="object-contain h-auto " src={image} />
      <div className="absolute" style={{ top: "50%" }}>
        <h5>{title}</h5>
        <a href={link}>Shop Now</a>
      </div>
    </div>
  );
};

export default ImageBox;
