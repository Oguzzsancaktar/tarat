import { Google } from "@/assets/svg";
import React from "react";

const PlayStoreButton = () => {
  return (
    <button className="w-[252px] h-16 px-12 py-3 bg-white rounded-2xl shadow border border-green-500 justify-center items-center gap-2 inline-flex">
      <div className="w-8 h-8 justify-center items-center flex">
        <div className="grow shrink basis-0 self-stretch pl-1 pr-[4.09px] py-[1.33px] justify-center items-center inline-flex">
          <div className="w-[23.91px] h-[29.33px] relative">
            <Google />
          </div>
        </div>
      </div>
      <div className="flex-col justify-center items-start inline-flex">
        <div className="text-neutral-800 text-xs font-medium font-['BR Shape']">
          Hemen İndirin
        </div>
        <div className="text-neutral-800 text-xl font-semibold font-['BR Shape']">
          App Store
        </div>
      </div>
    </button>
  );
};

export default PlayStoreButton;
