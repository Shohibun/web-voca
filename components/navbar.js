import React from "react";
import Image from "next/image";
import Logo from "../pages/images/logo.png";
import { FaRegUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="container mb-2 custom-navbar dark:bg-orange-500">
      <div className="w-10/12 mx-auto">
        <div className="flex justify-between">
          <Image src={Logo} alt="Logo" className="w-28" />

          <div className="flex items-center pr-8">
            <FaRegUserCircle className="text-gray-400 w-12 h-12" />
          </div>
        </div>
      </div>
    </div>
  );
}
