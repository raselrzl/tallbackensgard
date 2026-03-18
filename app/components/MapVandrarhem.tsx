"use client";
import React from "react";

const VandrarhemMap: React.FC = () => {
  const address =
    "Tallbackens Gård, Finspångsvägen 497, 605 80 Svärtinge, Sweden";

  return (
    <section className="relative w-full">
      {/* Address Card */}
{/*       <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 bg-white/95 backdrop-blur-md shadow-lg rounded-xl px-6 py-4 text-center max-w-sm w-[90%]">
        <p className="font-extrabold text-base sm:text-lg text-gray-900">
          Tallbackens Gård
        </p>
        <p className="text-sm sm:text-base text-gray-600">
          Finspångsvägen 497<br />
          605 80 Svärtinge
        </p>
      </div> */}

      {/* Map */}
      <div className="w-full h-120 overflow-hidden">
        <iframe
          title="Tallbackens Gård Location"
          src={`https://www.google.com/maps?q=${encodeURIComponent(
            address
          )}&output=embed`}
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};

export default VandrarhemMap;