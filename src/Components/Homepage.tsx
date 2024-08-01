import React from "react";
import Navbar from "./Navbar";
import Social from "./Social";
import Mail from "./Mail";

const Homepage = () => {
  return (
    <div className=" h-[100vh] w-full text-textColor ">
      <Navbar />
      <div className="flex items-center justify-between  w-full  h-full relative ">
        <Social />
        <Mail />
      </div>
    </div>
  );
};

export default Homepage;
