import React from "react";
import Image from "next/image";
import { ChevronDown, Search, Heart, UserRound } from "lucide-react";
import CarIcon from "./icons/CarIcon";
import BagIcon from "./icons/BagIcon";

const Navigation = () => {
  return (
    <nav className="py-3 grid grid-cols-8 gap-3 text-sm border-b border-slate-300">
      <div className="col-span-1 flex flex-row gap-2">
        <Image src="/logo.svg" height={10} width={20} alt="Logo" />
        <Image
          src="/logo_text.svg"
          width={100}
          height={100}
          alt="Text variation of the logo"
        />
      </div>
      <div className="col-span-7 gap-3 flex flex-row items-center justify-start">
        <div className="w-3/4 flex flex-row justify-between border border-slate-300 rounded-full overflow-hidden">
          <button
            style={{ width: "15%" }}
            className="flex flex-row items-center bg-slate-100 py-3 px-3 text-xs"
          >
            All Products
            <ChevronDown size={16} strokeWidth={1.5} />
          </button>
          <div style={{ width: "80%" }} className="">
            <input
              className="px-2 h-full w-full focus-visible:outline-1 placeholder:text-xs"
              placeholder="What are you looking for?"
            />
          </div>
          <button className="btn-primary px-3">
            <Search size={16} strokeWidth={1.5} />
          </button>
        </div>
        <button
          style={{ backgroundColor: "#27357A", minWidth: "130px" }}
          className="flex flex-row gap-2 items-center justify-center text-xs rounded-full py-3 px-5 text-white"
        >
          <CarIcon />
          My Garage
        </button>
        <div className="flex flex-row gap-4 items-center ml-auto mr-0 pl-4">
          <button className="px-1">
            <UserRound size={16} strokeWidth={1.5} />
          </button>
          <button className="px-1">
            <Heart size={16} strokeWidth={1.65} />
          </button>
          <button className="px-1 relative">
            <span
              className="absolute top-0 right-0 font-semibold rounded-full w-3 h-3 flex items-center justify-center"
              style={{ fontSize: "0.45rem", backgroundColor: "#F1BE20" }}
            >
              10
            </span>
            <BagIcon />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;