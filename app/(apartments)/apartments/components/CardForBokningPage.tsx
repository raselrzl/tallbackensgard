"use client";
import Image from "next/image";

const CardForBokningPage = () => {
  const items = [
    {
      image: "/moc/18.png",
      heading: "LÄGENHETSHOTELL",
      text: "Lättillgängligt boende for både semester och affärsresor",
      link: "#contact",
    },
    {
      image: "/moc/11.png",
      heading: "Vandrarhem",
      text: "Privärt boende privata sovrum och gemensamt kök",
      link: "#contact",
    },
    {
      image: "/moc/23.png",
      heading: "Möblerade Lägenheter",
      text: "Bekväma, fullt utrustade lägenheter för företag på kort och lång sikt.",
      link: "#contact",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-2xl md:text-4xl mb-4 font-julius font-semibold text-gray-900  leading-snug">
           Företagsbostäder i hela Sverige</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div key={index} className="bg-white flex flex-col">
            <Image
              src={item.image}
              alt={item.heading}
              width={320}
              height={200}
              className="rounded-xs object-cover mb-4 w-full h-60"
            />
            <h3 className="text-lg font-semibold mb-2 font-julius">{item.heading}</h3>
            <p className="text-gray-600 mb-4">{item.text}</p>
            {/*   <a
              href={item.link}
              className="text-blue-600 hover:underline font-medium mt-auto"
            >
              Contact Us
            </a> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardForBokningPage;
