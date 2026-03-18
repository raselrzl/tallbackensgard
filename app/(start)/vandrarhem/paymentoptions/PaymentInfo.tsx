"use client";

import Image from "next/image";
import { FileText, Phone, Info, Mail } from "lucide-react";

export default function PaymentInfo() {
  const paymentMethods = [
    {
      icon: (
        <Image
          src="/card.png"
          alt="Betalkort"
          width={80}
          height={80}
          className="object-contain"
        />
      ),
      title: "Betalkort",
      points: [
        "Fyll i dina uppgifter",
        "Följ instruktionerna i bokningsprogrammet",
        "Accepterar alla typer av kort",
      ],
      gradient: "",
    },
    {
      icon: (
        <Image
          src="/swish.png"
          alt="Swish"
          width={90}
          height={90}
          className="object-contain rounded-4xl"
        />
      ),
      title: "Swish",
      points: [
        "Skriv in uppgifter och klicka på bokningsförfrågan",
        "Bekräftelse skickas via mail",
        "Swisha belopp + bokningsnummer till Centralis Group",
      ],
      gradient: "",
    },
    {
      icon: <FileText className="w-8 h-8 text-white" />,
      title: "Faktura",
      points: [
        "Endast företag & föreningar",
        "Bokning via telefon, ej på hemsidan",
      ],
      gradient: "bg-gradient-to-tr from-yellow-400 to-yellow-500",
    },
    {
      icon: <Info className="w-8 h-8 text-white" />,
      title: "Säker betalning",
      points: [
        "Kontouppgifter sparas ej hos oss",
        "Hanteras av betalningsleverantör Stripe",
        "Fakturabetalning via samarbetspartner",
      ],
      gradient: "bg-gradient-to-tr from-purple-400 to-purple-600",
    },
    {
  icon: <Phone className="w-8 h-8 text-white" />,
  title: "Kontakt",
  noListStyle: true, // 👈 add this
  points: [
    <span key="mail" className="flex items-center gap-2">
      <Mail size={14} className="text-[#47d7ac]" />
      <a
        href="mailto:info@tallbackensgard.se"
        className="underline decoration-[#47d7ac] underline-offset-4 hover:text-[#47d7ac] transition"
      >
        info@tallbackensgard.se
      </a>
    </span>,

    <span key="phone" className="flex items-center gap-2">
      <Phone size={14} className="text-[#47d7ac]" />
      <a
        href="tel:0103333536"
        className="underline decoration-[#47d7ac] underline-offset-4 hover:text-[#47d7ac] transition"
      >
        010-333 35 36
      </a>
    </span>,
  ],
  gradient: "bg-gradient-to-tr from-red-400 to-red-600",
}
  ];

  return (
    <section className="max-w-7xl mx-auto p-4 md:p-8 space-y-8 mt-10" id="betalningsalternativ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {paymentMethods.map((method, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300"
          >
            {/* Icon / Logo */}
            <div
              className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 ${method.gradient}`}
            >
              {method.icon}
            </div>

            {/* Heading */}
            <h3 className="font-julius text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {method.title}
            </h3>

            {/* Dotted Points */}
            <ul
  className={`text-gray-700 dark:text-gray-300 text-sm md:text-base space-y-2 text-left ${
    method.noListStyle ? "" : "list-disc list-inside"
  }`}
>  {method.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}