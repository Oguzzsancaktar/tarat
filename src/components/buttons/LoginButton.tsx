import React from "react";

const LoginButton = () => {
  return (
    <button
      className="text-white text-base font-medium whitespace-nowrap justify-center items-stretch shadow-md grow px-7 py-3.5 rounded-2xl max-md:px-5"
      style={{
        backgroundColor: "#FFB800",
      }}
    >
      <text>Giriş Yap</text>
    </button>
  );
};

export default LoginButton;
