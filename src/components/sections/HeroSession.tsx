import { Barcode } from "@/assets/svg";
import { APP_ASSETS } from "@/constants";
import Image from "next/image";
import React from "react";

const HeroSession = () => {
  return (
    <section className="bg-hero-background bg-cover flex flex-col items-center justify-center h-screen   bg-gradient-vertical-primary border border-[color:var(--Brand-Primary,#FFB80015)] rounded-3xl">
      <div className="flex items-center justify-center">
        <Barcode />
      </div>

      {/* TITLE */}
      <div className="flex items-center justify-center mt-4">
        <text
          color="#45360D"
          className="items-center"
          fontSize={64}
          fontWeight={500}
          fontStyle={"normal"}
        >
          Güvenliğin Kilidini Açın, Anında Bağlanın
        </text>
      </div>
      {/* TITLE END */}

      {/* DESCRIPTION */}
      <div className="flex items-center justify-center w-full mt-24">
        <text className="text-center w-5/12">
          En iyi QR kod tarama uygulaması Tarat ile yeni bir güvenlik ve
          rahatlık çağının kilidini açın. Tarat, değerli eşyalarınızdaki QR
          kodlarını sorunsuz bir şekilde tarayarak ayrıntılı bilgileri anında
          ortaya çıkarmanıza olanak tanır.
        </text>
      </div>
      {/* DESCRIPTION END */}

      {/* STORE BUTTONS */}
      <div className="flex items-center justify-center gap-6 mt-24">
        <button className="max-w-64">
          <Image {...APP_ASSETS.APP_IMAGES.playStore} />
        </button>
        <button className="max-w-64">
          <Image {...APP_ASSETS.APP_IMAGES.appleStore} />
        </button>
      </div>
    </section>
  );
};

export default HeroSession;
