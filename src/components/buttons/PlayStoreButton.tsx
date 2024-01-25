import { Google } from "@/assets/svg";
import React from "react";

const PlayStoreButton = ({ link }: { link?: string }) => {
  return (
    <a
      href={link ? link : "javascript:void(0)"}
      className="w-[252px] h-16 px-12 py-3 bg-white rounded-2xl shadow-2xl border border-green-500 justify-center items-center gap-2 inline-flex transition duration-150 ease-in-out hover:bg-[#fff0cc] hover:shadow-lg active:bg-primary active:bg-opacity-20 active:shadow-lg"
    >
      <div className="w-8 h-8 justify-center items-center flex">
        <div className="grow shrink basis-0 self-stretch pl-1 pr-[4.09px] py-[1.33px] justify-center items-center inline-flex">
          <div className="w-[23.91px] h-[29.33px] relative">
            <Google />
          </div>
        </div>
      </div>
      <div className="flex-col justify-center items-start inline-flex">
        <div className="text-grayscale900 text-xs font-medium">
          Hemen İndirin
        </div>
        <div className="text-grayscale900 text-xl font-semibold">App Store</div>
      </div>
    </a>
  );
};

export default PlayStoreButton;
