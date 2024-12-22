import React from "react";

export default function Profile() {
  return (
    <div className="text-white flex justify-center mt-3 mb-12">
      <div className="flex bg-[#333333] rounded-2xl gap-3 mx-3 w-72 h-28 shadow-lg p-4">
        <div className="flex flex-col justify-center">
          <h3 className="text-lg font-light">Mohsen Ghanbari</h3>
          <p className="text-[#4ef09d]">Authenticated</p>
          <p className="text-base font-light">MohsenGhanbari@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
