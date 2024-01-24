import { APP_ASSETS, TEXT_OPTIONS } from "@/constants";
import React from "react";
import { FeatureCard } from "..";
import Image from "next/image";

const FeatureSession = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen ">
      <div className=" border border-[color:var(--Brand-Primary,#FFB80015)] rounded-3xl bg-orange-100 px-6  py-2">
        <text className="mb-6">Özellikler</text>
      </div>
      <text className="mt-5 mb-9 w-6/12 text-center">
        Sizi başkalarıyla buluşturmak, bilgilerinizi güvence altına almak ve
        kusursuz paylaşımı kolaylaştırmak için tasarlanan Tarat'ın yenilikçi
        özelliklerinin gücünü deneyimleyin.
      </text>
      <div className=" flex gap-12 items-center justify-center mb-44">
        <FeatureCard data={"dslfmsdfkds"} key={"1"} />
      </div>
    </section>
  );
};

export default FeatureSession;
