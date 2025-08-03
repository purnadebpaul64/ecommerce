import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <Link to={"/"}>
            <img src={assets.logo} alt="" className="mb-5 w-32" />
          </Link>
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <Link>
              <li className="hover:text-black transition">Home</li>
            </Link>
            <Link>
              <li className="hover:text-black transition">About us</li>
            </Link>
            <Link>
              <li className="hover:text-black transition">Delivery</li>
            </Link>
            <Link>
              <li className="hover:text-black transition">Privacy policy</li>
            </Link>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-6  00">
            <a href="">
              <li className="hover:text-black transition">+880 1916041901</li>
            </a>
            <a href="">
              <li className="hover:text-black transition">
                purnadebpaul64@gmail.com
              </li>
            </a>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="text-center text-sm py-5 text-gray-500">
          This is a practice project taken from YouTube.
        </p>
      </div>
    </section>
  );
};

export default Footer;
