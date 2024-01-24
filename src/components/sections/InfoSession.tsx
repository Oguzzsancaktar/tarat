import { APP_ASSETS } from "@/constants";
import Image from "next/image";
import React from "react";

const InfoSession = () => {
  return (
    <div className="w-[1440px] h-[663px] relative bg-gradient-to-r from-orange-50 to-orange-50 rounded-[32px] border border-yellow-500 border-opacity-25">
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
              className="w-[667px]  text-4xl font-medium font-['BR Shape']"
              style={{ color: "#45360D" }}
            >
              Tara, Güvenlilik Kat, Bağlan
            </div>

            <div className="self-stretch h-[186px] flex-col justify-start items-start gap-6 flex">
              <text
                className="self-stretch  text-lg font-normal font-['BR Shape'] leading-[27px]"
                style={{
                  color: "#45360D",
                }}
              >
                Tarat, aracınızla etkileşim kurmanın ve aracınızı korumanın
                kusursuz bir yolunu sunan güvenilir arkadaşınızdır. Yenilikçi QR
                kod tarama teknolojimiz, aracınızla ilgili kapsamlı ayrıntılara
                anında erişmenizi sağlar. Tarat, temel bilgilerden acil durum
                iletişim bilgilerine kadar kontrolü size verir.
              </text>
              <text
                className="self-stretch  text-lg font-normal font-['BR Shape'] leading-[27px]"
                style={{ color: "#755F23" }}
              >
                Bugün Tarat'a katılın ve taramanın güvenlikle buluştuğu ve
                bağlantıların saniyeler içinde kurulduğu bir dünyayı kucaklayın.
                Güvenliğiniz basitleştirildi.
              </text>
            </div>
          </div>
          <button
            className="h-12 px-8 py-2 rounded-2xl  shadow-inner justify-center items-center gap-2 inline-flex"
            style={{ backgroundColor: "#FFB800" }}
          >
            <div className="text-white text-base font-medium font-['BR Shape']">
              Uygulamayı İndir
            </div>
          </button>
        </div>
      </div>
      <div className="absolute right-0 top-0">
        <Image {...APP_ASSETS.APP_IMAGES.iPhone15Pro} />
      </div>
      <div className="w-[30px] h-[30px] left-[481px] top-[581px] absolute rounded-full border-4 border-amber-100" />
      <div className="w-11 h-11 left-[313px] top-[36px] absolute bg-yellow-500 bg-opacity-20 rounded-full border-4 border-yellow-500 border-opacity-25" />
    </div>
  );
};

export default InfoSession;
