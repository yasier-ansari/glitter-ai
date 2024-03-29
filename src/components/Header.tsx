"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "@/components/Container";
import WordMark from "./WordMark";
import { merge } from "@/assets/utils/merge";
import { HiBars3CenterLeft } from "react-icons/hi2";

const Header = () => {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", hamburgerMenuIsOpen);
  }, [hamburgerMenuIsOpen]);

  useEffect(() => {
    const closeHamburgerNavigation = () => setHamburgerMenuIsOpen(false);

    window.addEventListener("orientationchange", closeHamburgerNavigation);
    window.addEventListener("resize", closeHamburgerNavigation);

    return () => {
      window.removeEventListener("orientationchange", closeHamburgerNavigation);
      window.removeEventListener("resize", closeHamburgerNavigation);
    };
  }, [setHamburgerMenuIsOpen]);

  return (
    <header className=" fixed left-0 top-0 z-10 flex h-16 w-full  items-center justify-center bg-gradient-to-b from-[#07081530] via-sky-900/10 to-blue-500/10 backdrop-blur-[16px] ">
      <Container className="h-navigation-height flex h-full w-full max-w-6xl items-center justify-evenly  ">
        <Link className="text-md flex items-center " href="/">
          <WordMark className=" w-[6rem] sm:h-[1.2rem] sm:w-auto  lg:h-full lg:w-full" />
        </Link>

        <div
          className={merge(
            "transition-[visibility] md:visible",
            hamburgerMenuIsOpen ? "visible" : "invisible delay-500",
          )}
        >
          <nav
            className={merge(
              "top-navigation-height bg-background fixed left-0 h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto transition-opacity duration-500 md:relative md:top-0 md:block md:h-auto md:w-auto md:translate-x-0 md:overflow-hidden md:bg-transparent md:opacity-100 md:transition-none",
              hamburgerMenuIsOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-[-100vw] opacity-0",
            )}
          >
            <ul
              className={merge(
                "[&_li]:border-grey-dark flex h-full flex-col md:flex-row md:items-center [&_li]:ml-6 [&_li]:border-b md:[&_li]:border-none",
                "[&_a:hover]:text-grey [&_a]:h-navigation-height ease-in [&_a]:flex [&_a]:w-full [&_a]:translate-y-8 [&_a]:items-center [&_a]:text-lg [&_a]:transition-[color,transform] [&_a]:duration-300 md:[&_a]:translate-y-0 md:[&_a]:text-sm [&_a]:md:transition-colors",
                hamburgerMenuIsOpen && "[&_a]:translate-y-0",
              )}
            >
              <li>
                <Link href="#">Features</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="#">About</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="#">Integrations</Link>
              </li>
              <li>
                <Link href="#">Pricing</Link>
              </li>
              <li>
                <Link href="#">Career</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="ml-6 flex h-full items-center text-[0.75rem] sm:text-sm md:text-base ">
          <Link
            className="relative inline-flex  w-max rounded-full border border-blue-100/20 bg-blue-200/10 px-3 py-1 text-blue-200 outline-none ring-yellow-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-yellow-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-yellow-200/40 hover:text-yellow-300 after:hover:bg-opacity-15 focus:ring-2 md:px-4 md:py-2"
            href="#"
          >
            Get Started
          </Link>
        </div>

        <button
          className=" ml-3 sm:ml-6 md:hidden"
          onClick={() => setHamburgerMenuIsOpen((open) => !open)}
        >
          <span className="sr-only">Toggle menu</span>
          <HiBars3CenterLeft className="rotate-180" />
        </button>
      </Container>
    </header>
  );
};

export default Header;
