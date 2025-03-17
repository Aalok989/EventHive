import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/images/logo512.png";
import Logo2 from "../assets/images/logo192.png";

function Brand({ size }) {
  const { pathname } = useLocation();

  return (
    <Link
      title="Home"
      className={`font-extrabold gap-2 capitalize inline-flex text-xl items-center ${(pathname.includes('dashboard') || pathname.includes('auth')) && 'text-primary'} font-poppins`}
      to={"/"}
    >
      <img alt="Logo" className={size ?? "md:w-30 md:h-20  w-15 h-10"} src={(pathname.includes('dashboard') || pathname.includes('auth')) ? Logo2 : Logo} />
      
    </Link>
  );
}

export default Brand;
