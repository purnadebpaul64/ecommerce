import { Link, NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useState } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <div>
        <Link to={"/"}>
          <img src={assets.logo} alt="" className="w-36" />
        </Link>
      </div>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/collection"}>Collection</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </ul>
      <div className="flex items-center gap-4 sm:gap-6">
        <img src={assets.search_icon} alt="" className="w-5 cursor-pointer" />
        <div className="group relative">
          <img
            src={assets.profile_icon}
            alt=""
            className="w-5 cursor-pointer"
          />
          <div className=" group-hover:block hidden dropdown-menu absolute right-0 pt-4 transition">
            <div className="flex flex-col w-36 py-3 px-5 bg-slate-100 text-slate-500 rounded-lg">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link className="relative">
          <img src={assets.cart_icon} alt="" className="w-5 cursor-pointer" />
          <p className="absolute right-[-5px] bottom-[-5px] text-[10px] w-4 bg-black text-white text-center rounded-full leading-4 aspect-square">
            10
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt=""
          className="w-5 sm:hidden cursor-pointer"
        />
      </div>
      {/* mobile menu sidebar */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className=" p-5 cursor-pointer"
          >
            <img src={assets.cross_icon} alt="" />
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-5 border"
            to={"/"}
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-5 border"
            to={"/collection"}
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-5 border"
            to={"/about"}
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-5 border"
            to={"/contact"}
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
