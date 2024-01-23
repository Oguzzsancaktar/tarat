import { Barcode } from "@/assets/svg";
import { HeroSession } from "@/components/sections";
import { APP_ASSETS } from "@/constants";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <section className="flex h-full justify-around ">
      <HeroSession />
    </section>
  );
}
