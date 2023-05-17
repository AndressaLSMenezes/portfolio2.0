import Link from "next/link";
import { BsCodeSlash } from "react-icons/bs";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
import React, { useState } from "react";

export default function NavigationBar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <header className="w-screen bg-brand-100 h-16 row-center justify-center sticky top-0 z-30 text-brand-500">
      <div className="row-center justify-between w-11/12 max-w-7xl">
        <div className="h-16 w-16 text-4xl col-center justify-center ">
          <BsCodeSlash />
        </div>
        <button
          className="text-3xl sm:hidden"
          type="button"
          onClick={() => {
            isOpenMenu ? setIsOpenMenu(false) : setIsOpenMenu(true);
          }}
        >
          {isOpenMenu ? <IoCloseSharp /> : <IoMenu />}
        </button>
        <nav className="navigation-div-nav">
          <Link href={"#introduction"} className="relative group">
            <span>Inicio</span>
            <span className="header-link-span"></span>
          </Link>
          <Link href={"#aboutMe"} className="relative group">
            <span>Sobre mim</span>
            <span className="header-link-span"></span>
          </Link>
          <Link href={"#skills"} className="relative group">
            <span>Habilidades</span>
            <span className="header-link-span"></span>
          </Link>
          <Link href={"#projects"} className="relative group">
            <span>Projetos</span>
            <span className="header-link-span"></span>
          </Link>
          <Link href={"#contact"} className="relative group">
            <span>Contatos</span>
            <span className="header-link-span"></span>
          </Link>
        </nav>
      </div>
      <nav
        className={`sm:hidden ${
          isOpenMenu ? "navigation-div-nav-mobile" : "hidden"
        }`}
      >
        <Link href={"#introduction"} className="relative group">
          <span>Inicio</span>
          <span className="header-link-span"></span>
        </Link>
        <Link href={"#aboutMe"} className="relative group">
          <span>Sobre mim</span>
          <span className="header-link-span"></span>
        </Link>
        <Link href={"#skills"} className="relative group">
          <span>Habilidades</span>
          <span className="header-link-span"></span>
        </Link>
        <Link href={"#projects"} className="relative group">
          <span>Projetos</span>
          <span className="header-link-span"></span>
        </Link>
        <Link href={"#contact"} className="relative group">
          <span>Contatos</span>
          <span className="header-link-span"></span>
        </Link>
      </nav>
    </header>
  );
}
