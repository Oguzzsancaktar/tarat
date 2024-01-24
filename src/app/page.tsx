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
    <section className=" h-full justify-around ">
      <section className="mb-24">
        <HeroSession />
      </section>
      <section className="mb-44">
        <FeatureSession />
      </section>
      <section className="mb-44">
        <ImageSession />
      </section>
      <section className="mb-44">
        <InfoSession />
      </section>
      <section className="mb-44">
        <FAQSession />
      </section>
      <section>
        <BannerSession />
      </section>
    </section>
  );
}
