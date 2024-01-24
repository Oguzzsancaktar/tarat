import { APP_ASSETS } from "@/constants";
import Image from "next/image";
import React from "react";

const commonStyle = {
  backgroundColor: "#FFB800",
  borderColor: "#FFFFFF",
  outlineColor: "#FFB800",
};

const textCommonStyle = {
  backgroundColor: "#FFB800",
};

const ImageSession = () => {
  return (
    <div className="relative w-full h-screen items-center flex justify-center">
      <div className="w-[1103px] h-[840px] left-0 top-0 relative">
        <div
          className="w-2 h-2 left-[448px] top-[391px] absolute origin-top-left rotate-180 rounded-full border-2 border-neutral-700"
          style={commonStyle}
        />
        <div
          className="w-2 h-2 left-[558px] top-[652px] absolute origin-top-left rotate-180  rounded-full border-2 border-neutral-700"
          style={commonStyle}
        />
        <div
          className="w-[237px] h-12 px-4 py-3 left-[766px] top-0 absolute outline rounded-xl  shadow-inner border"
          style={commonStyle}
        />
        <div
          className="w-[173px] h-12 px-4 py-3 left-[137px] top-[436px] outline absolute rounded-xl  shadow-inner border"
          style={commonStyle}
        />
        <div
          className="w-[210px] h-12 px-4 py-3 left-[773px] top-[163px] absolute outline rounded-xl  shadow-inner border"
          style={commonStyle}
        />

        <div className="w-[1103px] h-[840px] left-0 top-0 absolute">
          <div className="items-center flex justify-center">
            <Image {...APP_ASSETS.APP_IMAGES.iPhone15} />
          </div>
          <div className="left-[812px] top-[12px] absolute ">
            <text
              className="text-white text-lg font-medium font-['BR Shape'] text-center"
              style={textCommonStyle}
            >
              Profil oluşturun!
            </text>
          </div>
          <div
            className="w-[219px] h-12 px-4 py-3 left-0 top-[167px] absolute rounded-xl outline shadow-inner border justify-center items-center gap-2.5 inline-flex"
            style={commonStyle}
          >
            <text className="text-white text-lg font-medium font-['BR Shape']">
              Sosyal Medyalarını Ekle!
            </text>
          </div>
          <div className="left-[153px] top-[448px] absolute text-white text-lg font-medium font-['BR Shape']">
            QR’larını Paylaş!
          </div>
          <text className="left-[789px] top-[175px] absolute text-white text-lg font-medium font-['BR Shape']">
            İnsanlarla Takipleşin!
          </text>
          <text
            className="w-[225px] h-12 px-4 py-3 left-[878px] top-[540px] absolute outline rounded-xl  shadow-inner border  justify-center items-center gap-2.5 inline-flex"
            style={commonStyle}
          >
            <text className="text-white text-lg font-medium font-['BR Shape']">
              QR’ları Tarat veya Ekle
            </text>
          </text>
        </div>
      </div>
    </div>
  );
};

export default ImageSession;
