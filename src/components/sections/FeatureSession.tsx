import { FeatureCard } from "..";
import { Ad, Community, Qr, Scan } from "@/assets/svg";

const features = [
  {
    title: "QR Kodunuzu Oluşturun",
    description:
      "Uygulamaya kendi QR kodunuzu kaydedin ve bunu araç ayrıntılarınız ve kişisel bilgilerinizle ilişkilendirin.",
    icon: <Qr />,
  },
  {
    title: "QR Kodlarını Tarayın",
    description:
      "Tarat'ın sezgisel kamera işlevini kullanarak arabanın ön camlarındaki QR kodlarını zahmetsizce tarayın.",
    icon: <Scan />,
  },

  {
    title: "Araçlarınızla Sosyalleşin",
    description:
      "Tarat, sadece araçlarınıza kimlik kazandırmakla kalmıyor, aynı zamanda yeni arkadaşlıklar kurmanızı ve sosyalleşmenizi destekleyen bir çok özelliğe sahiptir.",
    icon: <Community />,
  },
  {
    title: "Aracınızı Satın",
    description:
      "Tarat, araçlara kimlik kazandırmakla kalmaz, aynı zamanda hızlı araç satışını destekleyen bir özelliğe sahiptir. Kolayca ilan oluşturup aracınızı satabilirsiniz.",
    icon: <Ad />,
  },
];

const FeatureSession = () => {
  return (
    <section
      id="feature-session"
      className="flex flex-col items-center justify-center h-screen gap-9"
    >
      <div className="flex flex-col gap-[22px] items-center">
        <div className=" border border-[#FFB800] border-opacity-50 bg-[#FFB800] bg-opacity-10 rounded-[57px] px-6 py-2">
          Özellikler
        </div>
        <div className="flex  text-center text-grayscale600">
          Tarat ile aracınıza kimlik kazandırın ve iletişimde yeni bir boyut
          açın!
        </div>
      </div>
      <div className=" flex h-fit gap-12 items-start">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>
    </section>
  );
};

export default FeatureSession;
