import { Barcode } from "@/assets/svg";
import React from "react";
import PlayStoreButton from "../buttons/PlayStoreButton";
import AppStoreButton from "../buttons/AppStoreButton";

const HeroSession = () => {
  return (
    <section className="bg-hero-background bg-cover flex flex-col h-screen items-center justify-center bg-center border border-[color:var(--Brand-Primary,#FFB80015)] rounded-3xl">
      <div className="flex flex-col gap-4 items-center -mt-40">
        <Barcode />
        <div className="flex flex-col gap-6">
          {/* TITLE */}
          <div className="flex items-center justify-center text-center leading-tight font-BR_Regular">
            <text
              color="#45360D"
              className="items-center"
              fontStyle={"normal"}
              style={{ fontSize: 64 }}
            >
              Güvenliğin Kilidini Açın,
              <br /> Anında Bağlanın
            </text>
          </div>
          {/* TITLE END */}

          {/* DESCRIPTION */}
          <div className="flex items-center justify-center w-full font-BR_Regular">
            <text className="text-center w-6/12 font-normal text-[18px] text-[#624D16]">
              En iyi QR kod tarama uygulaması Tarat ile yeni bir güvenlik ve
              rahatlık çağının kilidini açın. Tarat, değerli eşyalarınızdaki QR
              kodlarını sorunsuz bir şekilde tarayarak ayrıntılı bilgileri
              anında ortaya çıkarmanıza olanak tanır.
            </text>
          </div>
        </div>
        {/* DESCRIPTION END */}
      </div>
      {/* STORE BUTTONS */}
      <div className="flex items-center justify-center gap-6 mt-24">
        <PlayStoreButton />
        <AppStoreButton />
      </div>
    </section>
  );
};

export default HeroSession;
