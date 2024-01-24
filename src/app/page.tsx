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
      <section className="h-screen">
        <HeroSession />
      </section>
      <section>
        <FeatureSession />
      </section>
      <section>
        <ImageSession />
      </section>
      <section>
        <InfoSession />
      </section>
      <section>
        <FAQSession />
      </section>
      <section>
        <BannerSession />
      </section>
    </>
  );
}
