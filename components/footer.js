import React from "react";
import Image from "next/image";
import Logo from "../pages/images/logo.png";

export default function Footer() {
  return (
    <div className="container h-44 custom-navbar mt-20">
      <div className="w-10/12 mx-auto">
        <Image src={Logo} alt="Logo" className="w-44" />
      </div>
    </div>
  );
}
