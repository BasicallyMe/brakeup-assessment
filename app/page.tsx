"use client";

import {
  Tag,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Heart,
  Star,
  Plus,
  Minus,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "./(components)/Navigation";
import CarIcon from "./(components)/icons/CarIcon";
import HdfcIcon from "./(components)/icons/HdfcIcon";
import GooglePay from "./(components)/icons/GooglePay";
import RazorPay from "./(components)/icons/RazorPay";

const categories = [
  {
    id: "brake-system",
    title: "Brake System",
  },
  {
    id: "air-filters",
    title: "Air Filters",
  },
  {
    id: "fluids",
    title: "Fluids",
  },
  {
    id: "suspension",
    title: "Suspension",
  },
  {
    id: "plugs-coils",
    title: "Plugs and Coils",
  },
  {
    id: "low-voltage-items",
    title: "Low Voltage Items",
  },
];

const images = [
  {
    path: "/product-image-1.png",
  },
  {
    path: "/product-image-2.png",
  },
  {
    path: "/product-image-3.png",
  },
  {
    path: "/product-image-4.png",
  },
  {
    path: "/product-image-5.png",
  },
];

const data = {
  productName: "",
  relatedProducts: [
    {
      name: "ICER Front Brake Pads",
      category: "Brake Pads",
      price: "3,609",
      image: "/other-product-image.png",
    },
  ],
  specifications: [
    {
      title: "Parts number",
      value: "BRK_001108",
    },
    {
      title: "Category",
      value: "Brake pad",
    },
    {
      title: "Brand",
      value: "ICER",
    },
    {
      title: "Wear indicator",
      value: "On product",
    },
    {
      title: "Axle",
      value: "Front",
    },
  ],
};

const currency = String.fromCharCode(8377);

export default function Home() {
  return (
    <div className="min-h-screen px-3 md:px-7">
      <Navigation />
      <div className="flex justify-center items-center py-3 border-b border-slate-300">
        <ul className="flex flex-row gap-5 w-full items-center justify-center text-xs font-medium">
          {categories.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
          <li>
            <div
              style={{ backgroundColor: "#209016" }}
              className="flex flex-row items-center justify-center py-1 px-1 rounded text-white gap-1"
            >
              <Tag size={13} />
              Offers
            </div>
          </li>
        </ul>
      </div>
      <main>
        <div className="text-xs py-3 font-normal">
          <Link
            href="/"
            className="text-slate-400 hover:text-black"
            aria-label="Home"
          >{`Home / `}</Link>
          <Link
            href="/"
            className="text-slate-400 hover:text-black"
            aria-label="Home"
          >{`Products / `}</Link>
          <Link
            href="/"
            className="text-slate-400 hover:text-black"
            aria-label="Home"
          >{`Brake System / `}</Link>
          <Link
            href="/"
            aria-label="Home"
          >{`ICER Front Brake Pad A3 2022 Limosine`}</Link>
        </div>
        <div className="grid gap-7 grid-cols-2 mt-3">
          <div className="flex flex-row">
            <div className="w-12 flex flex-col items-center py-3">
              <button className="mb-1 disabled:text-slate-400" disabled={true}>
                <ChevronUp size={16} strokeWidth={1.5} />
              </button>
              <div>
                {images.map((image, i) => (
                  <div
                    key={i.toString()}
                    className="mb-3 last:mb-0 w-12 h-12 border border-slate-300 first:border-black relative rounded-lg overflow-hidden"
                  >
                    <Image
                      src={image.path}
                      fill={true}
                      className="object-contain"
                      alt="Placeholder"
                    />
                  </div>
                ))}
              </div>
              <button className="mt-1">
                <ChevronDown size={16} strokeWidth={1.5} />
              </button>
            </div>
            <div className="w-full flex flex-col gap-3 items-center px-5">
              <div
                style={{ height: "500px", width: "500px" }}
                className="relative border border-slate-300 rounded-lg"
              >
                <button className="absolute w-9 h-9 flex items-center justify-center rounded-full border border-slate-300 top-3 right-3">
                  <Heart size={18} strokeWidth={1.5} />
                </button>
                <div className="relative h-full w-full">
                  <Image
                    src="/product-image-main.png"
                    fill={true}
                    alt="Placeholder"
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-3 w-full text-xs py-3">
                <button className="btn-primary py-3 rounded-full w-1/2">
                  Buy Now
                </button>
                <button className="w-1/2 py-3 rounded-full border border-black">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="py-3 border-b border-slate-300">
              <h2 className="text-base font-medium mb-2">
                ICER Front Brake Pad A3 2022 Limosine
              </h2>
              <div className="text-xs flex flex-row gap-1 mb-4">
                <div className="flex flex-row">
                  <Star size={14} strokeWidth={0} fill="#F2AB3C" />
                  <Star size={14} strokeWidth={0} fill="#F2AB3C" />
                  <Star size={14} strokeWidth={0} fill="#F2AB3C" />
                  <Star size={14} strokeWidth={0} fill="#F2AB3C" />
                  <Star size={14} strokeWidth={0} fill="#C9C9C9" />
                </div>
                <span className="font-medium">4.0</span>
                <span>{`(261 Reviews)`}</span>
              </div>
              <div className="mb-4">
                <span className="font-bold mr-2">{`${currency}5,042`}</span>
                <span className="text-xs text-slate-400 mr-2 line-through">{`${currency}6,000`}</span>
                <span className="font-bold text-green-600">{`16% OFF`}</span>
              </div>
              <div className="flex flex-row items-center gap-3 my-3">
                <div className="border border-black rounded-full flex flex-row items-center">
                  <button className="py-2 px-3 text-lg">
                    <Plus size={20} strokeWidth={1.25} />
                  </button>
                  <div className="font-medium px-4 h-full flex items-center justify-center">
                    1
                  </div>
                  <button className="py-2 px-3 text-lg">
                    <Minus size={20} strokeWidth={1.25} />
                  </button>
                </div>
                <span className="text-red-400 text-sm font-medium">
                  Only 2 left
                </span>
              </div>
              <div className="border border-green-600 rounded-full flex flex-row py-3 items-center justify-center bg-green-50 text-xs font-medium mt-4 ">
                <CarIcon fill="#000000" />
                <span className="ml-1">
                  Fits for{" "}
                  <a href="" className="underline underline-offset-2">
                    Mercedes-AMG GT 63 S E Performance
                  </a>
                </span>
              </div>
              <div className="text-xs w-3/4 py-2 my-2">
                <form className="" onSubmit={(e) => e.preventDefault()}>
                  <label htmlFor="pin" className="font-semibold">
                    Delivery Option
                  </label>
                  <div className="h-12 my-2 flex flex-row items-center px-1 py-3 border rounded-lg border-slate-300">
                    <input
                      className="w-3/4 px-2 border-r border-slate-400 h-full focus-within:outline-none"
                      type="text"
                      name="pin"
                      id="pin"
                      placeholder="Enter Pin-code"
                    />
                    <input
                      type="submit"
                      className="w-1/4 font-semibold"
                      value="Check"
                    />
                  </div>
                  <span className="text-slate-500">
                    Please enter PIN code to check delivery time.
                  </span>
                </form>
              </div>
            </div>
            <div className="border-b border-slate-300 py-3">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg border border-blue-700 text-xs overflow-hidden">
                  <div className="font-semibold px-3 py-4 bg-slate-50">
                    {`EMI from ${currency}244/month`}
                  </div>
                  <div className="flex flex-row items-center justify-between px-3 py-4">
                    <div
                      style={{ fontSize: "0.7rem" }}
                      className="flex flex-row items-center gap-2 text-slate-400"
                    >
                      <HdfcIcon />
                      {`& more`}
                    </div>
                    <a className="flex flex-row items-center text-blue-700 font-semibold cursor-default hover:underline underline-offset-2">
                      View Plans
                      <ChevronRight size={16} strokeWidth={1} />
                    </a>
                  </div>
                </div>
                <div className="rounded-lg border border-blue-700 text-xs overflow-hidden">
                  <div className="font-semibold px-3 py-4 bg-slate-50">
                    {`Save up to ${currency}252`}
                  </div>
                  <div className="flex flex-row items-center justify-between px-3 py-4">
                    <div
                      style={{ fontSize: "0.7rem" }}
                      className="flex flex-row items-center gap-2 text-slate-400"
                    >
                      <GooglePay />
                      {`& more`}
                    </div>
                    <a className="flex flex-row items-center text-blue-700 font-semibold cursor-default hover:underline underline-offset-2">
                      View
                      <ChevronRight size={16} strokeWidth={1} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center py-3">
                <div style={{ fontSize: "0.7rem" }}>Secured by</div>
                <RazorPay />
              </div>
            </div>
            <div className="py-3 border-b border-slate-300">
              <h4 className="text-xs font-semibold mb-3">Specifications</h4>
              <div className="grid grid-cols-2 gap-3">
                {data.specifications.map((item) => (
                  <div className="text-xs">
                    <div className="text-slate-500 mb-0.5">{item.title}</div>
                    <div className="font-medium">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="py-3">
              <h4 className="text-xs font-semibold mb-3">
                Frequently bought together
              </h4>
              <div className="text-xs flex flex-row items-center">
                {data.relatedProducts.map((item) => (
                  <div>
                    <div className="relative w-24 h-24 border border-slate-300 rounded-lg overflow-hidden">
                      <Image
                        src={item.image}
                        fill={true}
                        alt="Thumbnail image of a product"
                        className="object-contain"
                      />
                    </div>
                    <div className="my-2">
                      <div className="font-medium">{item.name}</div>
                      <div
                        className="font-medium"
                        style={{ fontSize: "0.7rem" }}
                      >
                        {item.category}
                      </div>
                    </div>
                    <div className="font-semibold">{`${currency}${item.price}`}</div>
                  </div>
                ))}
              </div>
              <div className="bg-slate-100 rounded-lg py-3 px-5 my-3 text-xs grid grid-cols-3 items-center">
                <div className="flex flex-row items-center gap-10 col-span-2">
                  <div className="">
                    <div className="text-slate-400">1 Item</div>
                    <div className="font-semibold">{`${currency}2,386`}</div>
                  </div>
                  <div className="text-xl font-light text-slate-400">{`+`}</div>
                  <div className="">
                    <div className="text-slate-400">2 Add-ons</div>
                    <div className="font-semibold">{`${currency}2,386`}</div>
                  </div>
                  <div className="text-xl font-light text-slate-400">{`=`}</div>
                  <div className="">
                    <div className="text-slate-400">Total</div>
                    <div className="font-semibold">{`${currency}6,795`}</div>
                  </div>
                </div>
                <button className="py-3 px-6 rounded-full border border-black font-medium col-span-1">
                  Add 3 items to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
