"use client";

export default function ContactInfoCard() {
  return (
    <section className="w-full flex items-center justify-center bg-gray-50 dark:bg-gray-900 ">
      <div className="max-w-5xl w-full dark:bg-gray-800 rounded-2xl px-4 sm:px-6 lg:px-8 pb-8 mb-10 mx-3 font-julius text-black dark:text-white shadow-md border border-gray-200 space-y-6 bg-white">
        <div className="flex justify-center mb-2">
          <img
            src="/logo.gif" // put your GIF in public folder
            alt="Contact"
            className="w-50 h-50 object-contain"
          />
        </div>
        {/* Header */}
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Hur kan vi hjälpa dig?
        </h2>

        {/* Description */}
        <p className="text-sm md:text-base text-center">
          Varmt välkommen att kontakta oss om du vill veta mer om vår verksamhet eller undrar över något inför ditt besök.
        </p>

        {/* Contact Details */}
        <div className="text-xs md:text-sm space-y-2 text-center">
          <p className="font-semibold">Tallbackens Vandrarhem & Apartments</p>
          <p>Finspångsvägen 497<br />605 80 Svärtinge</p>
          <p>
            Telefon:{" "}
            <a href="tel:0103333536" className="underline hover:text-[#47d7ac]">
              010-333 35 36
            </a>
          </p>
          <p>
            E-post:{" "}
            <a href="mailto:info@tallbackensgard.se" className="underline hover:text-[#47d7ac]">
              info@tallbackensgard.se
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}