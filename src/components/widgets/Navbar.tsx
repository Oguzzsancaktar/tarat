import React from "react";
import { TaratTextLogo } from "@/assets/svg";
import { LoginButton, RegisterButton } from "../buttons";

const Navbar = () => {
  return (
    <header className="max-w-[1440px] max-md:max-w-full mx-auto justify-between z-[1] w-full px-16 py-8 l max-md:px-5 fixed left-1/2 -translate-x-1/2">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[31%] max-md:w-full max-md:ml-0">
          <div className="items-stretch flex grow justify-between gap-4 max-md:mt-10">
            <button>
              <TaratTextLogo />
            </button>
            <div className="aspect-[3.33] object-contain object-center w-20 overflow-hidden self-center shrink-0 max-w-full my-auto" />
          </div>
        </div>

        <div className="flex flex-col items-center w-[45%] ml-5 max-md:w-full max-md:ml-0">
          <div className="items-center flex justify-between gap-5 my-auto max-md:mt-10">
            <button className="text-black text-opacity-40 hover:text-black text-base  font-medium grow whitespace-nowrap">
              <text>Anasayfa</text>
            </button>

            <button className="text-black  text-opacity-40 hover:text-black text-base font-medium">
              <text>Özellikler</text>
            </button>

            <button className="text-black text-opacity-40 hover:text-black text-base font-medium">
              <text>İndir</text>
            </button>

            <button className="text-black text-opacity-40 hover:text-black text-base font-medium">
              <text>SSS</text>
            </button>

            <button className="text-black text-opacity-40 hover:text-black text-base font-medium grow whitespace-nowrap">
              <text>Satın Al</text>
            </button>
          </div>
        </div>

        <div className="flex flex-col items-stretch w-[24%] ml-5 max-md:w-full max-md:ml-0">
          <div className="items-stretch flex grow justify-between gap-3.5 max-md:mt-10">
            <RegisterButton />
            <LoginButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
