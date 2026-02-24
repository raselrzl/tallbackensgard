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
            <span className="block md:hidden uppercase pt-8 px-8 text-center relative">
  {/* Logo GIF */}
  <img 
    src="/logo.gif" 
    alt="Tallbackens Logo" 
    className="mx-auto mb-4 w-24 h-auto"
  />
{/*   Tallbackens <br />
  Vandrarhem & <br />
  Apartments */}
</span>
            

            {/* Desktop - New style */}
          {/*   <span className="hidden md:flex flex-col md:flex-row md:items-center md:gap-6 uppercase md:pl-6">
              <span className="text-green-600">Tallbackens</span>
              <span className="text-gray-800">Vandrarhem & Apartments</span>
            </span> */}
          </h2>

          {/* Green divider */}
          {/* <div className="w-20 h-1 bg-green-600 mb-8 mx-8 md:mx-6" /> */}

          {/* Text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className=" space-y-8 md:space-y-20 text-gray-700 text-base md:text-lg leading-relaxed max-w-7xl mx-auto text-left px-4 md:px-6"
          >
            {/* Card-style layout for desktop */}
            <div className="shadow-lg md:flex md:gap-6 md:rounded-2xl overflow-hidden">
               <div className="md:w-1/3 p-6 flex items-center justify-center relative bg-black">
                {/* Background image */}
                <img
                  src="/b1.jpg"
                  alt="Background"
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                {/* Span text */}
                <span className="font-bold text-gray-100 text-lg relative z-10">
                  Vandrarhem
                </span>
              </div>
              <div className="md:w-2/3 p-6 text-justify">
                Tallbackens Vandrarhem & Apartments i Svärtinge, strax utanför
                Norrköping, erbjuder bekvämt och prisvärt boende året runt.
                Vandrarhemmet har totalt 60 bäddar fördelade på fyr- och
                sexbäddsrum, alla med egen dusch och WC samt direkt utgång till
                uteplats med egna utemöbler.
              </div>
            </div>

            <div className="shadow-lg md:flex md:flex-row-reverse md:gap-6 md:rounded-2xl overflow-hidden">
               <div className="md:w-1/3 p-6 flex items-center justify-center relative bg-black">
                {/* Background image */}
                <img
                  src="/b1.jpg"
                  alt="Background"
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                {/* Span text */}
                <span className="font-bold text-gray-100 text-lg relative z-10">
                  Natur & Utflykter
                </span>
              </div>
              <div className="md:w-2/3 p-6 text-justify">
                Vi erbjuder en lugn och familjevänlig miljö med natursköna
                omgivningar, nära Kolmårdens Djurpark, flera golfbanor,
                badplatser och andra populära utflyktsmål.
              </div>
            </div>

            <div className="shadow-lg md:flex md:gap-6 md:rounded-2xl overflow-hidden">
              <div className="md:w-1/3 p-6 flex items-center justify-center relative bg-black">
                {/* Background image */}
                <img
                  src="/b1.jpg"
                  alt="Background"
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                {/* Span text */}
                <span className="font-bold text-gray-100 text-lg relative z-10">
                  Lägenheter
                </span>
              </div>
              <div className="md:w-2/3 p-6 text-justify">
                Utöver vandrarhemmet erbjuder vi fullt utrustade lägenheter på
                flera adresser i och runt Norrköping – ett flexibelt och
                skräddarsytt alternativ för företag, entreprenörer och
                arbetsgrupper som behöver bekvämt och självständigt boende under
                projekt eller längre arbetsuppdrag.
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
