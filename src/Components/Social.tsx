import React from "react";
import { FaSquareGithub } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaPhoneSquareAlt } from "react-icons/fa";


const Social = () => {
  return (
    <div className="flex items-center gap-5 justify-center  text-textColor rotate-90 fixed bottom-56 left-[-5vw] ">
      <div className="flex  items-center gap-5">
      
        <a target="_blank" href="https://www.linkedin.com/in/divyansh-kumar-10678120a" >  <IoLogoLinkedin size={20} className="-rotate-90    hover:-translate-x-2 transition-transform duration-300 ease-in-out hover:text-primaryColor cursor-pointer"/></a>
        <a target="_blank" href="https://github.com/Divyansh4535"> <FaSquareGithub  size={20} className="-rotate-90   hover:-translate-x-2 transition-transform duration-300 ease-in-out hover:text-primaryColor cursor-pointer"/></a>
        <a target="_blank" href="https://wa.me/<919305603604>" >  <RiWhatsappFill size={20} className="-rotate-90    hover:-translate-x-2 transition-transform duration-300 ease-in-out hover:text-primaryColor cursor-pointer " /></a>
        <a target="_blank" href="" >  <FaSquareInstagram size={20} className="-rotate-90 hover:-translate-x-2 transition-transform duration-300 ease-in-out hover:text-primaryColor cursor-pointer " /></a>
        <a href="tel:919305603604" target="_blank"> <FaPhoneSquareAlt size={20} className="-rotate-90 hover:-translate-x-2 transition-transform duration-300 ease-in-out hover:text-primaryColor cursor-pointer " />
        </a>
      </div>
      <hr className=" w-56 rounded-full border-1 bg-textColor border-textColor px-5 hover:border-primaryColor hover:bg-primaryColor cursor-pointer  " />
    </div>
  );
};

export default Social;
