import { APP_ASSETS } from "@/constants";
import Image from "next/image";
import React from "react";

const FAQSession = () => {
  return (
    <div className="w-[1440px] h-[896.50px] flex-col justify-start items-center gap-[72px] inline-flex">
      <div className="flex-col justify-start items-center gap-[22px] flex">
        <div
          className="px-6 py-2 bg-yellow-500 bg-opacity-10 rounded-[57px]  border-opacity-50 justify-start items-center gap-2.5 inline-flex"
          style={{ borderColor: "#FFB800" }}
        >
          <div className="text-center text-neutral-800 text-xl font-medium font-['BR Shape']">
            Sıkça Sorulan Sorular
          </div>
        </div>
        <div className="w-[824px] text-center text-zinc-500 text-lg font-normal font-['BR Shape']">
          Sorunsuz ve bilgili bir yolculuk sağlamak için Tarat hakkında en sık
          sorulan soruları keşfedin.
        </div>
      </div>
      <div className="w-[1440px] justify-between items-center inline-flex">
        <div className="h-[736.50px] px-9 justify-between items-center flex">
          <div className="flex-col justify-start items-start gap-6 inline-flex">
            <div className="w-[614px] h-16 p-4 bg-white rounded-2xl border border-zinc-100 justify-between items-center inline-flex">
              <div className="justify-start items-center gap-3 flex">
                <div className="text-neutral-800 text-lg font-medium font-['BR Shape']">
                  Tarat'ı kullanmaya nasıl başlayabilirim?
                </div>
              </div>
              <div className="w-6 h-6 relative">
                <img
                  className="w-[12.99px] h-[7.53px] left-[6px] top-[8px] absolute"
                  src="https://via.placeholder.com/13x8"
                />
              </div>
            </div>
            <div className="h-[159px] flex-col justify-start items-start flex">
              <div className="self-stretch h-16 p-4 bg-amber-100 rounded-2xl border border-yellow-500 border-opacity-50 justify-between items-center inline-flex">
                <div className="justify-start items-center gap-3 flex">
                  <div className="text-neutral-800 text-lg font-medium font-['BR Shape']">
                    Neden Tarat Kullanmalıyım?
                  </div>
                </div>
                <div className="w-6 h-6 relative">
                  <img
                    className="w-[12.99px] h-[7.53px] left-[6px] top-[8px] absolute"
                    src="https://via.placeholder.com/13x8"
                  />
                </div>
              </div>
              <div className="w-[614px] px-4 pt-8 pb-4 bg-white rounded-bl-2xl rounded-br-2xl justify-start items-center gap-3 inline-flex">
                <div className="grow shrink basis-0 text-neutral-800 text-base font-normal font-['BR Shape']">
                  İnsanların bir şeyin sahibiyle iletişime geçtiği ve daha sonra
                  onlara yardımcı olduğu pek çok durum vardır; bu uygulama, bu
                  isteğinizi yerine getirmenize yardımcı olacaktır.
                </div>
              </div>
            </div>
            <div className="w-[614px] h-16 p-4 bg-white rounded-2xl border border-zinc-100 justify-between items-center inline-flex">
              <div className="justify-start items-center gap-3 flex">
                <div className="text-neutral-800 text-lg font-medium font-['BR Shape']">
                  Tarat sadece araç sahipleri için mi?
                </div>
              </div>
              <div className="w-6 h-6 relative">
                <img
                  className="w-[12.99px] h-[7.53px] left-[6px] top-[8px] absolute"
                  src="https://via.placeholder.com/13x8"
                />
              </div>
            </div>
            <div className="w-[614px] h-16 p-4 bg-white rounded-2xl border border-zinc-100 justify-between items-center inline-flex">
              <div className="justify-start items-center gap-3 flex">
                <div className="text-neutral-800 text-lg font-medium font-['BR Shape']">
                  Tarat'ı ticari reklamcılık için kullanabilir miyim?
                </div>
              </div>
              <div className="w-6 h-6 relative">
                <img
                  className="w-[12.99px] h-[7.53px] left-[6px] top-[8px] absolute"
                  src="https://via.placeholder.com/13x8"
                />
              </div>
            </div>
            <div className="w-[614px] h-16 p-4 bg-white rounded-2xl border border-zinc-100 justify-between items-center inline-flex">
              <div className="justify-start items-center gap-3 flex">
                <div className="text-neutral-800 text-lg font-medium font-['BR Shape']">
                  Tarat aracılığıyla paylaşılan kişisel bilgiler ne kadar
                  güvenli?
                </div>
              </div>
              <div className="w-6 h-6 relative">
                <img
                  className="w-[12.99px] h-[7.53px] left-[6px] top-[8px] absolute"
                  src="https://via.placeholder.com/13x8"
                />
              </div>
            </div>
          </div>
        </div>

        {/* PHONE IMAGE */}
        <div className="w-[663px] h-[679px]">
          <Image {...APP_ASSETS.APP_IMAGES.iPhone13} />
        </div>
      </div>
    </div>
  );
};

export default FAQSession;
