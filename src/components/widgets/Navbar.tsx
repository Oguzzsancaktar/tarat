import React from "react";
import { TaratTextLogo } from "@/assets/svg";
import { LoginButton, RegisterButton } from "../buttons";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="sticky top-0 px-[12.49%] w-full flex justify-between mx-auto  z-10 py-4">
      <Link href="/" className="flex ">
        <TaratTextLogo />
      </Link>

      <nav className="flex flex-2 gap-6 lg:gap-10 justify-center  ">
        <Link
          href={"#hero-session"}
          className=" text-black opacity-40 focus:text-black focus:opacity-100 hover:text-[#FFB800]"
        >
          Anasayfa
        </Link>
        <Link
          href={"#feature-session"}
          className=" text-black opacity-40 focus:text-black focus:opacity-100 hover:text-[#FFB800]"
        >
          Özellikler
        </Link>
        <Link
          href={"#info-session"}
          className=" text-black opacity-40 focus:text-black focus:opacity-100 hover:text-[#FFB800]"
        >
          İndir
        </Link>
        <Link
          href={"#faq-session"}
          className=" text-black opacity-40 focus:text-black focus:opacity-100 hover:text-[#FFB800]"
        >
          SSS
        </Link>
        <Link
          href={"#banner-session"}
          className=" text-black opacity-40 focus:text-black focus:opacity-100 hover:text-[#FFB800]"
        >
          Satın Al
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
