import { APP_ASSETS } from "@/constants";
import Image from "next/image";
import React from "react";
import { DownloadButton } from "..";

const InfoSession = () => {
  return (
    <div className="w-full h-[663px] self-center relative bg-gradient-to-r from-orange-50 to-orange-50 rounded-[32px] border border-yellow-500 border-opacity-25">
      <div
        className="w-[755px] h-[427px] left-[70px] top-[118px] absolute bg-white bg-opacity-90 rounded-3xl shadow-inner outline "
        style={{
          borderColor: "#FFB800",
          borderWidth: "3px",
          outlineColor: "#FFFFFF",
          outlineWidth: "4px",
        }}
      >
        <div className="left-[-239px] top-[-123px] absolute flex-col justify-start items-start gap-3 inline-flex">
          <div className="justify-start items-start gap-3 inline-flex"></div>
        </div>
        <div className="left-[44px] top-[49.50px] absolute flex-col justify-center items-start gap-6 inline-flex">
          <div className=" items-center absolute  ">
            <Image {...APP_ASSETS.APP_IMAGES.faqBackground} />
          </div>
          <div className="self-stretch h-[257px] flex-col justify-start items-start gap-6 flex">
            <div
              className="w-[667px] text-4xl font-medium font-['BR Shape']"
              style={{ color: "#45360D" }}
            >
              Tarat, İletişim Kur, Sosyalleş
            </div>

            <div className="self-stretch h-[186px] flex-col justify-start items-start gap-6 flex">
              <text
                className="self-stretch  text-lg font-normal font-['BR Shape'] leading-[27px]"
                style={{
                  color: "#45360D",
                }}
              >
               Tarat sayesinde aracınıza kimlik kazandırın ve etiketi taratanlarla iletişim kurun. Acil durumlar, selamlaşmalar veya ortak ilgi alanları hakkında konuşmak için harika bir yol! Tarat, sadece araç sahiplerini bir araya getirmekle kalmıyor, aynı zamanda ortak ilgi alanlarına sahip kişileri birbirine bağlayarak sosyalleşmeyi destekliyor. 
              </text>
              <text
                className="self-stretch  text-lg font-normal font-['BR Shape'] leading-[27px]"
                style={{ color: "#755F23" }}
              >
               Profilinizi oluşturun, etkileşime geçin. Aracınızın Kimliğini oluşturun, iletişim kurun, sosyalleşin ve isterseniz de aracınızı satın!
              </text>
            </div>
          </div>
          <DownloadButton />
        </div>
      </div>
      <div className="absolute right-0 -bottom-3">
        <Image {...APP_ASSETS.APP_IMAGES.iPhone15Pro} />
      </div>
      <div className="w-[30px] h-[30px] left-[481px] top-[581px] absolute rounded-full border-4 border-amber-100" />
      <div className="w-11 h-11 left-[313px] top-[36px] absolute bg-yellow-500 bg-opacity-20 rounded-full border-4 border-yellow-500 border-opacity-25" />
    </div>
  );
};

export default InfoSession;
