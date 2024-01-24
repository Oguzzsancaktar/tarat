import {
  Apple,
  Google,
  Instagram,
  Linkedin,
  TaratTextLogo1,
  X,
} from "@/assets/svg";
import { APP_ASSETS } from "@/constants";
import Image from "next/image";
import React from "react";
import PlayStoreButton from "../buttons/PlayStoreButton";
import AppStoreButton from "../buttons/AppStoreButton";

const Footer = () => {
  return (
    <div className="w-[1922px] h-[467px] pt-16 pb-8 bg-yellow-500 bg-opacity-0 border-t border-yellow-500 border-opacity-25 flex-col justify-center items-center gap-16 inline-flex">
      <div className="w-[1440px] py-12 justify-center items-start gap-36 inline-flex">
        <div className="flex-col justify-start items-center gap-[49px] inline-flex">
          <div className="flex-col justify-center items-start gap-4 flex">
            <div className="w-20 h-20 relative">
              <div className="w-[69.19px] h-[80.05px] left-[10.80px] top-[-0.03px] absolute"></div>
              <div className="w-[22.50px] h-[22.50px] left-[-0px] top-[57.50px] absolute">
                <div className="w-[80.47px] h-6 relative ">
                  <TaratTextLogo1 />
                </div>
              </div>
            </div>
          </div>
          <div className="justify-start items-start gap-6 inline-flex">
            <div className="w-6 h-6 relative mt-24">
              <Instagram />
            </div>
            <div className="w-6 h-6 relative mt-24">
              <X />
            </div>
            <div className="w-6 h-6 relative mt-24">
              <Linkedin />
            </div>
          </div>
        </div>
        <div className="justify-start items-start gap-[106px] flex">
          <div className="flex-col justify-start items-start gap-6 inline-flex">
            <div className="text-neutral-700 text-base font-medium font-['BR Shape']">
              Menü
            </div>
            <div className="flex-col justify-start items-start gap-3 flex">
              <div className="text-zinc-500 text-base font-normal font-['BR Shape']">
                Özellikler
              </div>
              <div className="text-zinc-500 text-base font-normal font-['BR Shape']">
                Indir
              </div>
              <div className="text-zinc-500 text-base font-normal font-['BR Shape']">
                Satın Al
              </div>
              <div className="text-zinc-500 text-base font-normal font-['BR Shape']">
                SSS
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-6 inline-flex">
            <div className="text-neutral-700 text-base font-medium font-['BR Shape']">
              Uygulama
            </div>
            <div className="flex-col justify-start items-start gap-3 flex">
              <div className="text-zinc-500 text-base font-normal font-['BR Shape']">
                Gizlilik Politikası
              </div>
              <div className="text-zinc-500 text-base font-normal font-['BR Shape']">
                Kullanım Şartları
              </div>
              <div className="text-zinc-500 text-base font-normal font-['BR Shape']">
                Aydınlatma Metini
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-6 inline-flex">
            <div className="text-neutral-700 text-base font-medium font-['BR Shape']">
              İletişim
            </div>
            <div className="flex-col justify-start items-start gap-3 flex">
              <div className="justify-center items-center gap-2 inline-flex">
                <div className="w-5 h-5 relative" />
                <div className="text-zinc-500 text-base font-normal font-['BR Shape']">
                  Contact@tarat.app
                </div>
              </div>
              <div className="justify-center items-center gap-2 inline-flex">
                <div className="w-5 h-5 relative" />
                <div className="text-zinc-500 text-base font-normal font-['BR Shape']">
                  +90555-555-5555
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-col justify-center items-start gap-6 inline-flex">
          <div className="flex-col justify-start items-start gap-6 flex">
            <PlayStoreButton />

            <AppStoreButton />
          </div>
        </div>
      </div>
      <div className="text-neutral-400 text-sm font-normal font-['BR Shape']">
        © 2024 Tarat. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
