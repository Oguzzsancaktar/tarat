import React from "react";

const BannerSession = () => {
  return (
    <div className="bg-banner-background bg-contain flex  items-center justify-center h-screen bg-no-repeat">
      <div className="flex flex-col items-center justify-center">
        <div
          className=" text-center  text-4xl font-medium font-['BR Shape']  -mt-96 mb-6"
          style={{ color: "#45360D" }}
        >
          Güvenliğinizi Sergileyin, Bağlantınızı Geliştirin
        </div>

        <div
          className="w-[785px] text-center  text-lg font-normal font-['BR Shape'] leading-[27px]  mb-12 items-center flex justify-center"
          style={{ color: "#45360D" }}
        >
          Arabanıza özel QR kod etiketinizi alarak Tarat'ın tüm potansiyelini
          ortaya çıkarın. Güvenlik, bağlantı ve reklam gibi ek avantajlardan
          yararlanırken arabanızın öne çıkmasını sağlayın. Tarat etiketinizi
          şimdi sipariş edin ve yolda yeni bir rahatlık düzeyini deneyimleyin.
        </div>
        <div
          className="w-[124px] h-12 px-8 py-2  rounded-2xl  shadow-inner justify-center items-center gap-2 inline-flex "
          style={{ backgroundColor: "#FFB800" }}
        >
          <div>
            <button className="text-white text-base font-medium font-['BR Shape'] self-center ">
              Satın Al
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSession;
