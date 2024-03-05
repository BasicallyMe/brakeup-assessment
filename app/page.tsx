"use client";

import { useState } from "react";
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
import type { RootState } from "@/lib/store";
import { useDispatch, useSelector, useStore } from "react-redux";
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

const currency = String.fromCharCode(8377);

export default function Home() {
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const product = useSelector((state: RootState) => state.product.value);

  return (
    <div className="min-h-screen px-0 md:px-7 relative">
      <Navigation />
      <div className="hidden sm:flex justify-center items-center py-3 border-b border-slate-300">
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
      <main className="px-4 sm:px-0 sm:mt-0 mt-20">
        <div className="hidden sm:block text-xs py-3 font-normal">
          <Link
            href="/"
            className="text-slate-400 hover:text-black"
            aria-label="Home"
          >{`Home / `}</Link>
          <Link
            href="/"
            className="text-slate-400 hover:text-black"
            aria-label="Products"
          >{`Products / `}</Link>
          <Link
            href="/"
            className="text-slate-400 hover:text-black"
            aria-label="Brake System"
          >{`Brake System / `}</Link>
          <Link
            href="/"
            aria-label={product.productName}
          >{`${product.productName}`}</Link>
        </div>
        <div className="flex flex-col sm:grid sm:gap-7 grid-cols-2 sm:mt-3">
          <div className="flex sm:flex-row flex-col">
            {/* This holds the mini thumbnails for desktop screen */}
            <div className="w-12 hidden sm:flex flex-col items-center py-3">
              <button
                className="mb-1 disabled:text-slate-400"
                aria-label="Previous"
                disabled={currentImage === 0}
                onClick={() => setCurrentImage((prevState) => prevState - 1)}
              >
                <ChevronUp size={16} strokeWidth={1.5} />
              </button>
              <div>
                {product.images.map((image, i) => (
                  <button
                    onClick={() => setCurrentImage(i)}
                    key={i.toString()}
                    className={`mb-3 last:mb-0 w-12 h-12 border relative rounded-lg overflow-hidden ${
                      i === currentImage ? "border-black" : "border-slate-300"
                    }`}
                  >
                    <Image
                      src={image.path}
                      fill={true}
                      className="object-contain"
                      alt="Image of the product"
                    />
                  </button>
                ))}
              </div>
              <button
                className="mt-1"
                aria-label="Next"
                disabled={currentImage === product.images.length - 1}
                onClick={() => setCurrentImage((prevState) => prevState + 1)}
              >
                <ChevronDown size={16} strokeWidth={1.5} />
              </button>
            </div>
            <div className="w-full flex flex-col gap-3 items-center sm:px-5">
              {/* This holds the main image for desktop screen */}
              <div
                style={{ height: "500px", minWidth: "500px", width: "100%" }}
                className="hidden sm:block relative border border-slate-300 rounded-lg"
              >
                <button
                  className="z-10 absolute w-9 h-9 flex items-center justify-center rounded-full border border-slate-300 top-3 right-3"
                  aria-label={
                    liked ? "Remove from wishlist" : "Add to wishlist"
                  }
                  onClick={() => {
                    setLiked((prevState) => !prevState);
                  }}
                >
                  {liked ? (
                    <Heart size={18} strokeWidth={0} fill="#F23B13" />
                  ) : (
                    <Heart size={18} strokeWidth={1.5} />
                  )}
                </button>
                <div className="relative h-full w-full">
                  <Image
                    src="/product-image-main.png"
                    fill={true}
                    alt="Image of the product"
                    className="object-contain"
                  />
                </div>
              </div>
              {/* This holds the main image for mobile view */}
              <div className="sm:hidden relative min-h-80 flex flex-col justify-center">
                <button className="z-10 absolute w-9 h-9 flex items-center justify-center rounded-full border border-slate-300 top-3 right-3">
                  <Heart size={18} strokeWidth={2} />
                </button>
                <div className="relative">
                  <Image
                    src="/product-image-main.png"
                    width={400}
                    height={400}
                    alt="Image of the product"
                    className="object-contain"
                  />
                </div>
              </div>
              {/* This shows breadcrumbs for mobile view */}
              <div className="sm:hidden flex flex-row items-center justify-center gap-2 w-full">
                {product.images.map((item, index) => (
                  <div
                    key={item.path}
                    className="w-2 h-2 first:bg-black bg-slate-400 rounded-full"
                  ></div>
                ))}
              </div>
              <div className="hidden sm:flex flex-row gap-3 w-full text-xs py-3">
                <button className="btn-primary py-3 rounded-full w-1/2">
                  Buy Now
                </button>
                <button className="w-1/2 py-3 rounded-full border border-black">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="sm:mt-0 mt-5 mb-10">
            <div className="py-3 border-b border-slate-300">
              <h2 className="text-base font-medium mb-2">
                {product.productName}
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
                <span className="font-bold mr-2">{`${currency}${product.currentPrice}`}</span>
                <span className="text-xs text-slate-400 mr-2 line-through">{`${currency}${product.fixedPrice}`}</span>
                <span className="font-bold text-green-600">{`16% OFF`}</span>
              </div>
              <div className="flex flex-row items-center gap-3 my-3">
                <div className="border border-black rounded-full flex flex-row items-center">
                  <button
                    className="py-3 sm:py-2 px-3 text-lg disabled:text-slate-300"
                    disabled={quantity <= 1}
                    aria-label="Reduce quantity"
                    onClick={() => {
                      setQuantity((prevQuantity) => prevQuantity - 1);
                    }}
                  >
                    <Minus size={20} strokeWidth={1.25} />
                  </button>
                  <div className="font-medium px-4 h-full flex items-center justify-center">
                    {quantity}
                  </div>
                  <button
                    className="py-3 sm:py-2 px-3 text-lg disabled:text-slate-300"
                    disabled={quantity === product.available}
                    aria-label="Increase quantity"
                    onClick={() => {
                      setQuantity((prevQuantity) => prevQuantity + 1);
                    }}
                  >
                    <Plus size={20} strokeWidth={1.25} />
                  </button>
                </div>
                <span className="text-red-400 text-sm font-medium">
                  {`Only ${product.available} left`}
                </span>
              </div>
              <div className="border border-green-600 rounded-full hidden sm:flex flex-row py-3 items-center justify-center bg-green-50 text-xs font-medium mt-4 ">
                <CarIcon fill="#000000" />
                <span className="ml-1">
                  Fits for{" "}
                  <a href="" className="underline underline-offset-2">
                    Mercedes-AMG GT 63 S E Performance
                  </a>
                </span>
              </div>
              <div className="text-xs sm:w-3/4 sm:border-t-0 border-t border-slate-300 w-full py-2 my-2">
                <div className="flex sm:hidden flex-row-reverse sm:flex-row gap-3 w-full text-sm font-semibold py-3">
                  <button className="btn-primary py-3 rounded-full w-1/2">
                    Buy Now
                  </button>
                  <button className="w-1/2 py-3 rounded-full border border-black">
                    Add to cart
                  </button>
                </div>
                <form className="" onSubmit={(e) => e.preventDefault()}>
                  <label
                    htmlFor="pin"
                    className="font-semibold hidden sm:block"
                  >
                    Delivery Option
                  </label>
                  <div className="h-12 sm:my-2 my-3 flex flex-row items-center px-1 py-3 border rounded-lg sm:border-slate-300 border-slate-400">
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
            <div className="border-b border-slate-300 py-3 mt-4">
              <div className="flex flex-col sm:grid grid-cols-2 gap-4">
                <div className="rounded-lg border border-blue-700 sm:text-xs  overflow-hidden">
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
                      View plans
                      <ChevronRight size={16} strokeWidth={1} />
                    </a>
                  </div>
                </div>
                <div className="rounded-lg border border-blue-700 sm:text-xs overflow-hidden">
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
                      View offers
                      <ChevronRight size={16} strokeWidth={1} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center py-3 text-slate-400">
                <div style={{ fontSize: "0.8rem" }}>Secured by</div>
                <RazorPay />
              </div>
            </div>
            <div className="py-3 border-b border-slate-300">
              <h4 className="sm:text-xs font-semibold mb-3">Specifications</h4>
              <div className="grid grid-cols-2 gap-3">
                {product.specifications.map((item, index) => (
                  <div
                    key={`${index} item-${item.title}`}
                    className="sm:text-xs text-sm"
                  >
                    <div className="text-slate-500 mb-0.5">{item.title}</div>
                    <div className="font-medium">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="py-3">
              <h4 className="sm:text-xs font-semibold mb-5">
                Frequently bought together
              </h4>
              <div className="sm:text-xs flex flex-row items-center">
                {product.relatedProducts.map((item, index) => (
                  <div
                    key={`${index} ${item.name}`}
                    className="flex sm:flex-col flex-row"
                  >
                    <div className="relative sm:w-24 sm:h-24 w-32 h-32 border border-slate-300 rounded-lg overflow-hidden">
                      <Image
                        src={item.image}
                        fill={true}
                        alt="Thumbnail image of a product"
                        className="object-contain"
                      />
                    </div>
                    <div className="my-2 sm:ml-0 ml-4">
                      <div className="font-medium">{item.name}</div>
                      <div className="font-medium sm:text-xs">
                        {item.category}
                      </div>
                      <div className="font-semibold mt-2">{`${currency}${item.price}`}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-slate-100 rounded-lg py-3 px-5 my-3 text-sm sm:text-xs flex flex-col sm:grid grid-cols-3 items-center ">
                <div className="flex flex-row items-center justify-between sm:justify-normal w-full sm:w-auto sm:gap-10 sm:col-span-2 sm:mb-0 mb-3">
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
                <button className="py-3 rounded-full border border-black font-medium w-full sm:w-auto sm:col-span-1">
                  Add 3 items to cart
                </button>
              </div>
            </div>
            <div className="text-sm text-blue-500 flex flex-row items-center">
              <a href="" className="font-semibold">
                View all 419 reviews
              </a>
              <ChevronRight size={18} strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
