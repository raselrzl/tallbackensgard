"use client";

import Image from "next/image";
import Link from "next/link";

type Props = {
  id: string;
  title: string;
  features: string[];
  rating: string;
  reviews: string;
  price: string;
};

export default function ApartmentCardVariant({
  id,
  title,
  features,
  rating,
  reviews,
  price,
}: Props) {
  return (
    <Link href={`/apartments/bokning/${id}`} className="group">
      <div className="bg-white rounded-sm shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer h-80 flex flex-col">

        {/* Image Section */}
        <div className="relative w-full h-60">
          <Image
            src="/ap.jpg"
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105 rounded-sm"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10 rounded-sm" />

          {/* Price badge */}
          <span className="absolute top-2 right-2 bg-[#47d7ac] text-black font-bold text-xs px-2 py-1 rounded-full">
            {price} kr / natt
          </span>

          {/* Rating badge */}
          <span className="absolute top-2 left-2 bg-white/90 text-black font-semibold text-xs px-2 py-1 rounded-full flex items-center gap-1">
            ⭐ {rating} ({reviews})
          </span>
        </div>

        {/* Info Section */}
        <div className="p-3 flex-1 flex flex-col justify-between">
          <h3 className="font-semibold text-sm md:text-base mb-1 line-clamp-2">
            {title}
          </h3>
          <p className="text-xs text-gray-500 line-clamp-2">
            {features.join(" • ")}
          </p>
        </div>
      </div>
    </Link>
  );
}