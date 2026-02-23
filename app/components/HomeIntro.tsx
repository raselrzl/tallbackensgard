"use client";
import { motion } from "framer-motion";

export default function HomeIntro() {
  return (
    <section className="w-full py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-2xl"
        >
          {/* Title */}
          <h2 className="text-2xl md:text-4xl font-extrabold mb-6 text-left">
            {/* Mobile */}
            <span className="block md:hidden uppercase pt-8 px-8">
              Tallbackens <br />
              Vandrarhem & <br />
              Apartments
            </span>

            {/* Desktop */}
            <span className="hidden md:block whitespace-nowrap uppercase md:pl-6">
              Tallbackens Vandrarhem & Apartments
            </span>
          </h2>

          {/* Green divider */}
          <div className="w-20 h-1 bg-green-600 mb-8 mx-8" />

          {/* Text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed max-w-5xl mx-auto text-left px-4"
          >
            <p className="shadow-lg p-6 md:rounded-2xl text-justify tracking-wide bg-green-50">
              Tallbackens Vandrarhem & Apartments i Svärtinge, strax utanför
              Norrköping, erbjuder bekvämt och prisvärt boende året runt.
              Vandrarhemmet har totalt 60 bäddar fördelade på fyr- och sexbäddsrum,
              alla med egen dusch och WC samt direkt utgång till uteplats med egna
              utemöbler.
            </p>

           <p className="shadow-lg p-6 md:rounded-2xl text-justify tracking-wide bg-green-50">
              Vi erbjuder en lugn och familjevänlig miljö med natursköna
              omgivningar, nära Kolmårdens Djurpark, flera golfbanor,
              badplatser och andra populära utflyktsmål.
            </p>

            <p className="shadow-lg p-6 md:rounded-2xl rounded-b-2xl text-justify tracking-wide bg-green-50">
              Utöver vandrarhemmet erbjuder vi fullt utrustade lägenheter på flera
              adresser i och runt Norrköping – ett flexibelt och skräddarsytt
              alternativ för företag, entreprenörer och arbetsgrupper som behöver
              bekvämt och självständigt boende under projekt eller längre
              arbetsuppdrag.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}