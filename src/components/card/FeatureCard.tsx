import { Ad, Community, Qr, Scan } from "@/assets/svg";
import React from "react";

const backgroundColor = "#FFB80003";

const FeatureCard = () => {
  return (
    <div className="flex space-x-4">
      {/* Kart 1 */}
      <div
        className={`p-6 border border-[color:var(--Brand-Primary,#FFB80025)] rounded-3xl w-1/4`}
        style={{ backgroundColor }}
      >
        <div className="border border-[color:var(--Brand-Primary,#FFB80025)] bg-white rounded-3xl p-1 items-center">
          <div className="items-stretch flex justify-center">
            <Scan />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <text>QR Kodlarını Tarayın</text>
          <text className="text-center w-3/4">
            Tarat'ın sezgisel kamera işlevini kullanarak arabanın ön
            camlarındaki QR kodlarını zahmetsizce tarayın.
          </text>
        </div>
      </div>

      {/* Kart 2 */}
      <div
        className={`p-6 border border-[color:var(--Brand-Primary,#FFB80025)] rounded-3xl w-1/4`}
        style={{ backgroundColor }}
      >
        <div className="border border-[color:var(--Brand-Primary,#FFB80025)] bg-white rounded-3xl p-1 items-center">
          <div className="items-stretch flex justify-center">
            <Qr />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <text>QR Kodlarını Tarayın</text>
          <text className="text-center">
            Tarat'ın sezgisel kamera işlevini kullanarak arabanın ön
            camlarındaki QR kodlarını zahmetsizce tarayın.
          </text>
        </div>
      </div>

      {/* Kart 3 */}
      <div
        className={`p-6 border border-[color:var(--Brand-Primary,#FFB80025)] rounded-3xl w-1/4`}
        style={{ backgroundColor }}
      >
        <div className="border border-[color:var(--Brand-Primary,#FFB80025)] bg-white rounded-3xl p-1 items-center">
          <div className="items-stretch flex justify-center">
            <Community />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <text>QR Kodlarını Tarayın</text>
          <text className="text-center">
            Tarat'ın sezgisel kamera işlevini kullanarak arabanın ön
            camlarındaki QR kodlarını zahmetsizce tarayın.
          </text>
        </div>
      </div>

      {/* Kart 4 */}
      <div
        className={`p-6 border border-[color:var(--Brand-Primary,#FFB80025)] rounded-3xl w-1/4`}
        style={{ backgroundColor }}
      >
        <div className="border border-[color:var(--Brand-Primary,#FFB80025)] bg-white rounded-3xl p-1 items-center">
          <div className="items-stretch flex justify-center">
            <Ad />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <text>QR Kodlarını Tarayın</text>
          <text className="text-center">
            Tarat'ın sezgisel kamera işlevini kullanarak arabanın ön
            camlarındaki QR kodlarını zahmetsizce tarayın.
          </text>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
