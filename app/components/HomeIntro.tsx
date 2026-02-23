"use client";
import { motion } from "framer-motion";

export default function HomeIntro() {
  return (
    <section className="w-full py-16 md:py-20 bg-stone-200 mb-10 px-2">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-extrabold mb-6 leading-tight"
        >
          {/* Mobile: 3 lines */}
          <span className="block md:hidden">
            Tallbackens <br />
            Vandrarhem & <br />
            Apartments
          </span>

          {/* Desktop: single line */}
          <span className="hidden md:block whitespace-nowrap">
            Tallbackens Vandrarhem & Apartments
          </span>
        </motion.h2>

        {/* Text block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-6 text-gray-700 text-base md:text-xl"
        >
          <p>
            Tallbackens Vandrarhem & Apartments i Svärtinge, strax utanför
            Norrköping, erbjuder bekvämt och prisvärt boende året runt.
            Vandrarhemmet har totalt 60 bäddar fördelade på fyr- och sexbäddsrum,
            alla med egen dusch och WC samt direkt utgång till uteplats med egna
            utemöbler.
          </p>

          <p>
            Vi erbjuder en lugn och familjevänlig miljö med natursköna
            omgivningar, nära Kolmårdens Djurpark, flera golfbanor, badplatser och
            andra populära utflyktsmål.
          </p>

          <p>
            Utöver vandrarhemmet erbjuder vi fullt utrustade lägenheter på flera
            adresser i och runt Norrköping – ett flexibelt och skräddarsytt
            alternativ för företag, entreprenörer och arbetsgrupper som behöver
            bekvämt och självständigt boende under projekt eller längre
            arbetsuppdrag.
          </p>
        </motion.div>
      </div>
    </section>
  );
}