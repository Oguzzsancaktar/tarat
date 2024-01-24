import React from "react";
import { TaratTextLogo } from "@/assets/svg";
import { LoginButton, RegisterButton } from "../buttons";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center sticky top-0 px-16 bg-transparent w-full py-4">
      <Link href="/" className="flex ">
        <TaratTextLogo />
      </Link>

      <nav className="flex flex-2 gap-6 lg:gap-10 justify-center text-background">
        <Link
          href={"/"}
          className="hover:[text-shadow:_0_0_10px_rgb(255_255_255_/_100%)] transition-all duration-300"
        >
          Anasayfa
        </Link>
        <Link
          href={"/"}
          className="hover:[text-shadow:_0_0_10px_rgb(255_255_255_/_100%)] transition-all duration-300"
        >
          Anasayfa
        </Link>
        <Link
          href={"/"}
          className="hover:[text-shadow:_0_0_10px_rgb(255_255_255_/_100%)] transition-all duration-300"
        >
          Anasayfa
        </Link>
        <Link
          href={"/"}
          className="hover:[text-shadow:_0_0_10px_rgb(255_255_255_/_100%)] transition-all duration-300"
        >
          Anasayfa
        </Link>
        <Link
          href={"/"}
          className="hover:[text-shadow:_0_0_10px_rgb(255_255_255_/_100%)] transition-all duration-300"
        >
          Anasayfa
        </Link>
      </nav>

      <div className="flex gap-[14px] items-center justify-center">
        <RegisterButton />
        <LoginButton />
      </div>
    </header>
  );
};

export default Navbar;
