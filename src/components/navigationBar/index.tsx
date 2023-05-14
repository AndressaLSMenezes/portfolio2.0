import Link from "next/link";
import { BsCodeSlash } from "react-icons/bs";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
import React, { useState } from "react";

export default function NavigationBar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <header className="w-screen bg-brand-100 h-16 row-center justify-center sticky top-0 z-30">
      <div className="row-center justify-between  w-11/12">
        <div className="h-16 w-16 text-4xl col-center justify-center">
          <BsCodeSlash />
        </div>
        <button className="text-3xl sm:hidden">{isOpenMenu ? <IoCloseSharp /> : <IoMenu />}</button>
        <nav className="navigation-div-nav sm:row-center">
          <Link href={"#aboutMe"} className="navigation-div-nav-link">
            Inicio
          </Link>
          <Link href={"#aboutMe"} className="navigation-div-nav-link">
            Sobre mim
          </Link>
          <Link href={"#skill"} className="navigation-div-nav-link">
            Habilidades
          </Link>
          <Link href={"#aboutMe"} className="navigation-div-nav-link">
            Contatos
          </Link>
        </nav>
      </div>
    </header>
  );
}
