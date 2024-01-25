import React from "react";

const RegisterButton = ({ link }: { link?: string }) => {
  return (
    <a
      href={link ? link : "javascript:void(0)"}
      className="relative inline-flex items-center bg-white justify-center px-8 py-2 overflow-hidden text-neutral-800 rounded-2xl shadow-2xl group  text-base  whitespace-nowrap  border border-primary grow transition duration-150 ease-in-out hover:bg-[#fff0cc] hover:shadow-lg active:bg-[#fff7e5]  active:shadow-lg"
    >
      Kayıt Ol
    </a>
  );
};

export default RegisterButton;
