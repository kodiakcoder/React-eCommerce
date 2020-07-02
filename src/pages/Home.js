import React from "react";

import Navbar from "../components/NavBar";
import Slider from "../components/Slider";
import ImageBox from "../components/ImageBox";
import ProductBox from "../components/ProductBox";

const data = {
  image:
    "https://amely.thememove.com/wp-content/uploads/2017/12/element1-hp1.png",
  title: "Trends Of The Season",
  link: "#",
};

const imagebox = [
  {
    image:
      "https://amely.thememove.com/wp-content/uploads/2017/12/amely-banner-1.png",
    title: "Some Title",
    link: "#",
  },
  {
    image: "https://amely.thememove.com/wp-content/uploads/2017/12/img-1.png",
    title: "Some Title",
    link: "#",
  },
  {
    image:
      "https://amely.thememove.com/wp-content/uploads/2017/12/amely-banner-2.png",
    title: "Some Title",
    link: "#",
  },
];

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider imageURL={data.image} title={data.title} link={data.link} />
      <div className="flex">
        {imagebox.map((item) => (
          <ImageBox image={item.image} title={item.title} link={item.link} />
        ))}
      </div>
      <div className="text-center mt-8 mb-4">
        <h1 className="text-4xl text-semibold">Trendy Clothing</h1>
        <span className="text-2xl text-gray-700">
          Browse our website for the hottest items in the marketplace now.
        </span>
      </div>
      <div className="flex mt-8 mb-8 justify-evenly">
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
      </div>
    </div>
  );
};

export default Home;
