"use client";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import ThemeToggler from "./ThemeToggler";
import { usePathname } from "next/navigation";

function Header() {
  const [header, setHeader] = useState(false);
  const path = usePathname();

  useEffect(function () {
    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    return () => window.removeEventListener("scroll", scrollYPos);
  });

  return (
    <header
      className={`${
        header
          ? "py-4 bg-white shadow-lg dark:bg-accent"
          : "py-6 dark:bg-transparent"
      } sticky top-0 z-30 transition-all ${path === "/" && "bg-[#fef9f5]"}`}
    >
      <div className="mx-auto container">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center text-xl"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToggler />
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
