import { Barcode } from "@/assets/svg";
import React from "react";
import PlayStoreButton from "../buttons/PlayStoreButton";
import AppStoreButton from "../buttons/AppStoreButton";

const HeroSession = () => {
  return (
    <section className="h-screen gap-24 bg-hero-background bg-cover flex flex-col place-content-center border border-primary015 rounded-3xl">
      <div className="flex flex-col gap-4 items-center">
        <Barcode />
        <div className="flex flex-col gap-6">
          {/* TITLE */}
          <div className="flex justify-center text-center text-[64px] leading-tight text-textPrimary">
          Tarat ile Ulaşılabilir Ol
          </div>
          {/* TITLE END */}

          {/* DESCRIPTION */}
          <div className="flex justify-center w-full">
            <text className="text-center w-6/12 font-normal text-[18px] text-textPrimary">
              Günümüzde, araçlarımız sadece birer taşıma aracı olmaktan çok daha
              fazlasını temsil ediyor. Tarat Etiketleri, aracınıza kişisel bir
              kimlik kazandırmanın ve sizinle iletişim kurmanın yeni ve inovatif
              bir yolunu sunuyor.
            </text>
          </div>
        </div>
        {/* DESCRIPTION END */}
      </div>
      {/* STORE BUTTONS */}
      <div className="flex justify-center gap-6 ">
        <PlayStoreButton />
        <AppStoreButton />
      </div>
    </section>
  );
};

export default HeroSession;
