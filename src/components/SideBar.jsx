import React from "react";
import Profile from './Profile';
import {  Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="bg-[#222222] w-80 sticky top-11 rounded-r-3xl shadow-2xl my-7">
      <Profile />
      <div className="flex flex-col mb-9 justify-center mx-6 text-white">
        <ul className="flex flex-col gap-4">
          <li className="border-[#4ef09d] border rounded-md justify-center flex">
            <Link to="/" className="w-full hover:bg-[#3ec88b] h-full p-4 flex items-center justify-center transition-colors duration-300">
              Add The Card
            </Link>
          </li>
          <li className="border-[#4ef09d] border rounded-md justify-center flex">
            <Link to="/transaction" className="w-full hover:bg-[#3ec88b] h-full p-4 flex items-center justify-center transition-colors duration-300">
              Transaction
            </Link>
          </li>
          <li className="border-[#4ef09d] border rounded-md justify-center flex">
            <Link to="/history" className="w-full hover:bg-[#3ec88b] h-full p-4 flex items-center justify-center transition-colors duration-300">
              History
            </Link>
          </li>
          <li className="border-[#4ef09d] border rounded-md justify-center flex">
            <button className="w-full hover:bg-[#3ec88b] h-full p-4 transition-colors duration-300">Account</button>
          </li>
          <li className="border-[#4ef09d] border justify-center rounded-md flex">
            <button className="w-full hover:bg-[#3ec88b] h-full p-4 transition-colors duration-300">Account Security</button>
          </li>
          <li className="border-[#4ef09d] border justify-center flex rounded-md">
            <button className="w-full hover:bg-[#3ec88b] h-full p-4 transition-colors duration-300">Setting</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
