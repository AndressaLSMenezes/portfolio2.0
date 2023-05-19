import Link from "next/link";
import { BsCodeSlash } from "react-icons/bs";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
import React, { useState } from "react";
import Swithcer from "../Swithcer";

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <header className="w-screen bg-brand-100 h-16 row-center justify-center sticky top-0 z-30 text-brand-500">
      <div className="row-center justify-between w-11/12 max-w-7xl">
        <div className="h-16 w-16 text-4xl col-center justify-center">
          <BsCodeSlash />
        </div>

        <button
          className="text-3xl md:hidden"
          type="button"
          onClick={() => {
            isOpenMenu ? setIsOpenMenu(false) : setIsOpenMenu(true);
          }}
        >
          {isOpenMenu ? <IoCloseSharp /> : <IoMenu />}
        </button>
        <nav className="navigation-div-nav">
          <button type="button" onClick={()=> {
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
          }} className="relative group">
            <span>Inicio</span>
            <span className="header-link-span"></span>
          </button>
          <Link replace href={"#aboutMe"} className="relative group">
            <span>Sobre mim</span>
            <span className="header-link-span"></span>
          </Link>
          <Link replace href={"#skills"} className="relative group">
            <span>Habilidades</span>
            <span className="header-link-span"></span>
          </Link>
          <Link replace href={"#projects"} className="relative group">
            <span>Projetos</span>
            <span className="header-link-span"></span>
          </Link>
          <Link replace href={"#contact"} className="relative group">
            <span>Contatos</span>
            <span className="header-link-span"></span>
          </Link>

          <Swithcer setIsOpenMenu={setIsOpenMenu} />
        </nav>
      </div>
      <nav
        className={`md:hidden ${
          isOpenMenu ? "navigation-div-nav-mobile" : "hidden"
        }`}
      >
        <Swithcer setIsOpenMenu={setIsOpenMenu} />
        <Link replace href={"#introduction"} className="relative group">
          <span onClick={() => setIsOpenMenu(false)}>Inicio</span>
          <span className="header-link-span"></span>
        </Link>
        <Link replace href={"#aboutMe"} className="relative group">
          <span onClick={() => setIsOpenMenu(false)}>Sobre mim</span>
          <span className="header-link-span"></span>
        </Link>
        <Link replace href={"#skills"} className="relative group">
          <span onClick={() => setIsOpenMenu(false)}>Habilidades</span>
          <span className="header-link-span"></span>
        </Link>
        <Link replace href={"#projects"} className="relative group">
          <span onClick={() => setIsOpenMenu(false)}>Projetos</span>
          <span className="header-link-span"></span>
        </Link>
        <Link replace href={"#contact"} className="relative group">
          <span onClick={() => setIsOpenMenu(false)}>Contatos</span>
          <span className="header-link-span"></span>
        </Link>
      </nav>
    </header>
  );
}
