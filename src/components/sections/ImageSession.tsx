import { APP_ASSETS } from "@/constants";
import Image from "next/image";
import React from "react";

const ImageSession = () => {
  return (
    <div
      id="image-session"
      className="w-[948px] h-[705px] items-center flex justify-center text-white text-center"
    >
      <div className="flex w-full h-full justify-center relative">
        <Image {...APP_ASSETS.APP_IMAGES.iPhone15} width={699} height={840} />
        <div className="h-12 px-4 py-3 right-[148px] top-0 absolute outline rounded-xl shadow-inner border bg-[#FFB800] border-[#FFFFFF] outline-[#FFB800]">
          Profil Oluşturun!
        </div>
        <div className="h-12 px-4 py-3 right-[110px] top-[125px] absolute outline rounded-xl shadow-inner border bg-[#FFB800] border-[#FFFFFF] outline-[#FFB800]">
          İnsanlarla Takipleşin!
        </div>
        <div className="h-12 px-4 py-3 left-0 top-[125px] absolute rounded-xl outline shadow-inner border gap-2.5 inline-flex bg-[#FFB800] border-[#FFFFFF] outline-[#FFB800]">
          Sosyal Medyalarını Ekle!
        </div>
        <div className="h-12 px-4 py-3 left-[128px] bottom-[318px] outline absolute rounded-xl shadow-inner border bg-[#FFB800] border-[#FFFFFF] outline-[#FFB800]">
          QR’larını Paylaş!
        </div>
        <div className="h-12 px-4 py-3 right-4 bottom-[235px] absolute outline rounded-xl shadow-inner border inline-flex bg-[#FFB800] border-[#FFFFFF] outline-[#FFB800]">
          <text className="">QR’ları Tarat veya Ekle</text>
        </div>
      </div>
    </div>
  );
};

export default ImageSession;
