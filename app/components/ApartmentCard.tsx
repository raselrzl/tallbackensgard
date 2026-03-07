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

export default function ApartmentCard({
  id,
  title,
  features,
  rating,
  reviews,
  price,
}: Props) {
  return (
    <Link href={`/apartments/bokning/${id}`}>
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer">

        <Image
          src="/ap.jpg"
          alt={title}
          width={400}
          height={250}
          className="w-full h-48 object-cover"
        />

        <div className="p-5">

          <h3 className="font-semibold text-lg mb-2">{title}</h3>

          <p className="text-sm text-gray-500 mb-3">
            {features.join(" • ")}
          </p>

          <div className="flex items-center gap-2 mb-3">
            <span className="bg-[#47d7ac] text-black text-sm font-bold px-2 py-1 rounded">
              {rating}
            </span>

            <span className="text-sm text-gray-500">
              {reviews} recensioner
            </span>
          </div>

          <div>
            <p className="text-xs text-gray-500">Pris från</p>
            <p className="text-xl font-bold">{price} kr / natt</p>
          </div>

        </div>
      </div>
    </Link>
  );
}