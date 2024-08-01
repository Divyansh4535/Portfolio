import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { GiSplitCross } from "react-icons/gi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="h-20 flex px-5 items-center  justify-between w-full text-primaryColor ">
      <div className="w-[10vw] ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-hexagon-letter-d"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
          <path d="M10 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-2z" />
        </svg>
      </div>
      <ul
        className={` ${
          !menuOpen
            ? "md:flex md:items-center md:w-[70vw] justify-end  md:pl-50 gap-10  hidden"
            : "md:hidden  bg-bgColor absolute top-0 right-0  h-[100vh] w-[50vw] flex-col flex gap-5 items-left  p-2"
        } text-textColor `}
      >
        <GiSplitCross className={`md:hidden  size-12 p-2 cursor-pointer `}  onClick={()=>setMenuOpen(false)} />
        {["About us", "Skill", "Projects", "Contact"].map((item, idx) => {
          return (
            <div>
              <a
                className=" hover:text-primaryColor text-base font-normal cursor-pointer capitalize"
                href={`${item}`}
                key={idx}
              >
                {item}
              </a>
            </div>
          );
        })}
        <button className="md:text-[1.3vw] font-bold w-fit h-[6vh] flex items-center md:justify-center  border  md:px-2 px-4 py-1 hover:bg-primaryColor hover:text-bgColor   ">
          {" "}
          Resume{" "}
        </button>
      </ul>
      <span
        className="md:hidden cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <RiMenu3Fill className="size-7" />{" "}
      </span>
    </div>
  );
};

export default Navbar;
