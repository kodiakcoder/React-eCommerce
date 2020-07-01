import React, { useState } from "react";

const NavBar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [showMenu, setShowMenu] = useState("hidden");
  const onClickMenuToggle = () => {
    setMenuToggle(!menuToggle);
    setShowMenu(menuToggle ? "block" : "hidden");
    console.log(menuToggle);
  };

  return (
    <div className="bg-blue-700 xl:flex xl:justify-between">
      <div className="flex items-center justify-between py-2  ">
        <div className="mx-8">
          <img className="h-16" src={require("../assets/logo.png")} />
        </div>
        <div>
          <div>
            <button
              className="pr-4 lg:hidden"
              type="button"
              onClick={onClickMenuToggle}
            >
              <svg viewBox="0 0 100 80" width="40" height="40">
                <rect width="100" height="20"></rect>
                <rect y="30" width="100" height="20"></rect>
                <rect y="60" width="100" height="20"></rect>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`display: ${showMenu} px-4 px-y3 lg:inline-grid xl:block`}
      >
        <a
          href="#"
          className="my-2 display:block text-grey-700 font-semibold md:inline-block"
        >
          Home
        </a>
        <a
          href="#"
          className="my-2 display:block text-grey-700 font-semibold md:inline-block"
        >
          About Us
        </a>
        <a
          href="#"
          className="my-2 display:block text-grey-700 font-semibold md:inline-block"
        >
          Shop
        </a>
        <a
          href="#"
          className="my-2 display:block text-grey-700 font-semibold md:inline-block"
        >
          Contact Us
        </a>
        <a
          href="#"
          className="my-2 display:block text-grey-700 font-semibold md:inline-block"
        >
          FAQ
        </a>
      </div>
    </div>
  );
};

export default NavBar;
