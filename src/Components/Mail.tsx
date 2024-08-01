import React from "react";

const Mail = () => {
  return (
    <div className="flex h-2 items-center gap-2 justify-center  text-textColor rotate-90 fixed   hover:text-primaryColor cursor-pointer bottom-56 right-[-10vw] hover:-translate-y-2 transition-transform duration-300 ease-in-out  hover:border-primaryColor ">
      <a target="_blank" href="divyanshkumar12346@gmail.com" >divyanshkumar12346@gmail.com</a>
      <hr className=" w-40  rounded-full border-1 bg-textColor border-textColor    hover:bg-primaryColor hover:border-primaryColor cursor-pointer" />
    </div>
  );
};

export default Mail;
