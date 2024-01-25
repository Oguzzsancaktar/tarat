import React from "react";
import Image from "next/image";
import { APP_ASSETS } from "@/constants";
import { PurchaseButton } from "..";

const BannerSession = () => {
  return (
    <div className="flex h-[412px] p-10 w-full bg-banner-background self-center bg-no-repeat bg-cover items-center relative">
      <Image
        {...APP_ASSETS.APP_IMAGES.bannerLogo}
        className="absolute -top-16 left-[46%]"
      />
      <div className="inline-flex flex-col items-center gap-12">
        <div className="flex flex-col gap-6">
          <span className="text-4xl text-center text-textSecondary">
            Araçlarına Kimlik Oluştur, Hızlı ve Kolay İletişim Kur
          </span>
          <span className="text-lg text-center text-textSecondary">
            Tarat, kullanıcılara tam kontrol sağlar. Paylaşmak istedikleri
            bilgileri belirlemelerine ve gizliliklerini korumalarına olanak
            tanır.<br/>Hemen bir TARAT etiketi satın alarak aracınız ile bir adım
            öne geçin, kişisel bir profil oluşturun ve araç sahibi topluluğuna
            katılın.<br/>Kimliğinizi öne çıkarın, iletişim kurun, sosyalleşin! Tarat
            ile araç sahibi olmak daha anlamlı ve etkileşimli hale geliyor.
          </span>
        </div>
        <PurchaseButton />
      </div>
    </div>
  );
};

export default BannerSession;
