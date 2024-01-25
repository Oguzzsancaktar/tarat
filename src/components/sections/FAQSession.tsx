"use client";
import Accordion from "../accordion/FaqAccordion";
import faqBg from "../../assets/svg/faq-background.svg";
import Image from "next/image";
import { APP_ASSETS } from "@/constants";

const FAQSession = () => {
  return (
    <div
      id="faq-session"
      className="w-full self-center items-center gap-[72px]"
    >
      <div className="flex flex-col items-center gap-[22px] ">
        <div className="flex py-2 px-6 items-center rounded-[57px] border border-primary085 bg-secondary">
          Sık Sorulan Sorular
        </div>
        <span className="text-lg text-grayscale600">
          Sorunsuz ve bilgili bir yolculuk sağlamak için Tarat hakkında en sık
          sorulan soruları keşfedin.
        </span>
      </div>
      <div className="relative flex w-full items-center">
        <Image
          src={faqBg}
          alt="faq-background"
          className="absolute left-0 -z-10"
        />
        <Accordion />
        <Image {...APP_ASSETS.APP_IMAGES.iPhone13} />
      </div>
    </div>
  );
};

export default FAQSession;
