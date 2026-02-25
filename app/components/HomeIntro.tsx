"use client";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Vandrarhem",
    img: "/b1.jpg",
    description:
      "Tallbackens Vandrarhem & Apartments i Svärtinge, strax utanför Norrköping, erbjuder bekvämt och prisvärt boende året runt. Vandrarhemmet har totalt 60 bäddar fördelade på fyr- och sexbäddsrum, alla med egen dusch och WC samt direkt utgång till uteplats med egna utemöbler.",
  },
  {
    title: "Natur & Utflykter",
    img: "/b1.jpg",
    description:
      "Vi erbjuder en lugn och familjevänlig miljö med natursköna omgivningar, nära Kolmårdens Djurpark, flera golfbanor, badplatser och andra populära utflyktsmål.",
  },
  {
    title: "Lägenheter",
    img: "/b1.jpg",
    description:
      "Utöver vandrarhemmet erbjuder vi fullt utrustade lägenheter på flera adresser i och runt Norrköping – ett flexibelt och skräddarsytt alternativ för företag, entreprenörer och arbetsgrupper som behöver bekvämt och självständigt boende under projekt eller längre arbetsuppdrag.",
  },
];

export default function HomeIntro() {
  const cardVariants = {
    left: {
      hidden: { x: "-45%", y: 100, opacity: 0 }, // diagonal bottom-left
      visible: { x: 0, y: 0, opacity: 1 },
    },
    middle: {
      hidden: { y: 100, opacity: 0 }, // bottom
      visible: { y: 0, opacity: 1 },
    },
    right: {
      hidden: { x: "45%", y: 100, opacity: 0 }, // diagonal bottom-right
      visible: { x: 0, y: 0, opacity: 1 },
    },
  };

  return (
    <section className="max-w-7xl mx-auto py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center">
          Upptäck Tallbackens
        </h2>

        {/* Container for desktop 3-card, mobile horizontal scroll */}
        <div className="flex gap-6 md:flex-row flex-col md:overflow-visible overflow-x-auto snap-x snap-mandatory">
          {cards.map((card, i) => {
            // Determine direction per card
            let direction: "left" | "middle" | "right" = "middle";
            if (i === 0) direction = "left";
            else if (i === 2) direction = "right";

            return (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.6 }} // triggers when 60% visible
                variants={cardVariants[direction]}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="md:w-1/3 w-80 shrink-0 bg-white rounded-2xl shadow-lg overflow-hidden snap-start"
              >
                {/* Image */}
                <div className="relative h-48 w-full">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                  />
                  <span className="font-bold text-gray-100 text-lg absolute z-10 top-4 left-4">
                    {card.title}
                  </span>
                </div>

                {/* Description */}
                <div className="p-6 text-gray-700 text-justify">{card.description}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}