"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";


export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }


  return (
    <button
      className="w-fit h-fit p-1 rounded-md hover:scale-110 active:scale-100 duration-200 bg-[#212933] dark:bg-slate-200 mt-3 md:mt-0"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? <MoonIcon/> : <SunIcon/>}
    </button>
  );
};