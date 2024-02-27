import { Tag, ChevronDown, ChevronUp, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "./(components)/Navigation";

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
                  <div key={i.toString()} className="mb-3 last:mb-0 w-12 h-12 border border-slate-300 first:border-black relative rounded-lg overflow-hidden">
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
          <div className="">
            <h2 className="text-base font-medium">
              ICER Front Brake Pad A3 2022 Limosine
            </h2>
          </div>
        </div>
      </main>
    </div>
  );
}
