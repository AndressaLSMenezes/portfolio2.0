import React from "react";
import { useTheme } from "next-themes";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";

type IProps = {
  setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Swithcer({setIsOpenMenu} : IProps) {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;


  return (
    <button
      type="button"
      onClick={() => {
        currentTheme == "dark" ? setTheme("light") : setTheme("dark");
        setIsOpenMenu(false);
      }}
      className="flex cursor-pointer text-2xl transition-all ease-in-out duration-500"
    >
      {currentTheme == "dark" ? <BsFillMoonStarsFill /> : <BsSunFill />}
    </button>
  );
}
