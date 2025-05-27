import React from "react";
import notFoundImage from "./img/404.png"; 

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
      <img
        src={notFoundImage}
        alt="Page Not Found"
        className="w-4/5 max-w-md mb-8"
      />
      <h1 className="text-3xl md:text-4xl font-bold text-[#2A9D8F] mb-4">
        Page Not Found
      </h1>
      <p className="text-[#586C89] text-lg md:text-xl">
        Sorry, the page you are looking for doesn't exist.
      </p>
    </div>
  );
}
