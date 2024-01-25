import {
  BannerSession,
  FAQSession,
  FeatureSession,
  HeroSession,
  ImageSession,
  InfoSession,
} from "@/components/sections";
import React from "react";

export default function Home() {
  return (
    <>
      <section id="hero-session" className="px-[7.29%]">
        <HeroSession />
      </section>
      <section id="feature-session">
        <FeatureSession />
      </section>
      <section id="image-session">
        <ImageSession />
      </section>
      <section id="info-session" className="flex w-full h-screen px-[3%]">
        <InfoSession />
      </section>
      <section id="faq-session" className="flex h-screen w-full px-[3%]">
        <FAQSession />
      </section>
      <section id="banner-session" className="flex h-screen w-ful px-[7.29%]">
        <BannerSession />
      </section>
    </>
  );
}
