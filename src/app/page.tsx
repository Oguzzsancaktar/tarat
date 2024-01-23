import { NextIcon } from "@/assets/svg";
import { APP_ASSETS } from "@/constants";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NextIcon />
      <Image {...APP_ASSETS.APP_IMAGES.default} />
    </main>
  );
}
