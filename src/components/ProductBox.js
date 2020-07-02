import React, { useState } from "react";

const ProductBox = () => {
  return (
    <div className="w-64">
      <div className="relative">
        <img
          className="object-contain w-full"
          src="https://amely.thememove.com/wp-content/uploads/2017/12/Pocket-Cross-Body-Bag-03-600x800.jpg"
        />
        <div
          className="hover:block absolute bottom-0 w-full bg-gray-600 py-2 text-center cursor-pointer hover:text-white"
          onClick={() => alert("Product Added")}
        >
          <span>Add To Cart</span>
        </div>
      </div>
      <h1 className=" text-left text-gray-800 pt-4">Product Title</h1>
      <span className="text-left font-semibold mt-8">$16.99</span>
    </div>
  );
};

export default ProductBox;
