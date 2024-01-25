import React from "react";

const DownloadButton = ({ link }: { link?: string }) => {
  return (
    <a
      href={link ? link : "javascript:void(0)"}
      className="relative inline-flex items-center justify-center px-8 py-2 overflow-hidden font-medium text-white bg-primary rounded-2xl shadow-2xl group  text-base  whitespace-nowrap  border border-primary grow transition duration-150 ease-in-out hover:shadow-lg active:bg-[#e5a500] active:shadow-lg"
    >
      Uygulamayı İndir
    </a>
  );
};

export default DownloadButton;
