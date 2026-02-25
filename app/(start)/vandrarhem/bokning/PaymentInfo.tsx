"use client";

import { CreditCard, Smartphone, FileText, Phone, Info } from "lucide-react";

export default function PaymentInfo() {
  const paymentMethods = [
    {
      icon: <CreditCard className="w-8 h-8 text-white" />,
      title: "Betalkort",
      description:
        "Fyll i dina uppgifter och följ instruktionerna kring kortbetalningen i bokningsprogrammet.",
      gradient: "bg-gradient-to-tr from-blue-400 to-blue-600",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-white" />,
      title: "Swish",
      description:
        "Skriv i alla uppgifter och klicka på bokningsförfrågan. Bekräftelse skickas via mail med bokningsnummer. Swisha belopp + bokningsnumret (123 11 533 11) till Centralis Group.",
      gradient: "bg-gradient-to-tr from-green-400 to-green-600",
    },
    {
      icon: <FileText className="w-8 h-8 text-white" />,
      title: "Faktura",
      description:
        "Endast företag & föreningar. Bokning av företag kan ej göras på hemsida. Ring för bokningar.",
      gradient: "bg-gradient-to-tr from-yellow-400 to-yellow-500",
    },
    {
      icon: <Info className="w-8 h-8 text-white" />,
      title: "Säker betalning",
      description:
        "Dina kontouppgifter sparas inte hos oss utan hanteras av vår betalningsleverantör Stripe. I vissa fall hanteras fakturabetalningen av vår samarbetspartner.",
      gradient: "bg-gradient-to-tr from-purple-400 to-purple-600",
    },
    {
      icon: <Phone className="w-8 h-8 text-white" />,
      title: "Kontakt",
      description:
        "Maila info@tallbackensgard.se eller ring 010-3333536. Telefontider: 10:00–17:00 alla dagar.",
      gradient: "bg-gradient-to-tr from-red-400 to-red-600",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto p-4 md:p-8 space-y-8 mt-10">
      <h2 className="text-3xl md:text-4xl font-julius font-bold text-gray-900 dark:text-white text-center mb-6">
        Betalningsalternativ
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {paymentMethods.map((method, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300"
          >
            {/* Icon */}
            <div
              className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 ${method.gradient}`}
            >
              {method.icon}
            </div>

            {/* Heading */}
            <h3 className="font-julius text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {method.title}
            </h3>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
              {method.description}
            </p>
          </div>
        ))}

        {/* Search Booking Button */}
       
      </div>
    </section>
  );
}