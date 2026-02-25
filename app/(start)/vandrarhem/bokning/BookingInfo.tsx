"use client";

import { XCircle, Calendar, Phone, Clock } from "lucide-react";

export default function BookingInfo() {
  const infoData = [
    {
      icon: <XCircle className="w-6 h-6 text-red-500" />,
      bg: "bg-red-100",
      title: "Rökning förbjuden",
      description:
        "Rökning är strikt förbjuden i samtliga rum. Vid överträdelse sker omedelbar avvisning och en avgift om 10 000 SEK debiteras.",
    },
    {
      icon: <Calendar className="w-6 h-6 text-blue-500" />,
      bg: "bg-blue-100",
      title: "Avbokning",
      description:
        "Fri avbokning gäller fram till 48 timmar före ankomst. Vid senare avbokning debiteras hela bokningsbeloppet (100%).",
    },
    {
      icon: <Phone className="w-6 h-6 text-green-500" />,
      bg: "bg-green-100",
      title: "Mobilnummer",
      description:
        "Ett giltigt mobilnummer måste anges vid bokning för att dörrkod ska kunna skickas ut inför ankomst.",
    },
    {
      icon: <Clock className="w-6 h-6 text-yellow-500" />,
      bg: "bg-yellow-100",
      title: "Incheckning / Utcheckning",
      description:
        "Incheckning från kl. 16:00 • Utcheckning senast kl. 11:00",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto p-4 md:p-8 space-y-6 mb-10">
      {/* Section Heading */}
      <h2 className="text-2xl md:text-3xl font-julius font-bold text-gray-900 dark:text-white text-center mb-6">
        Bokningsinformation
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {infoData.map((item, idx) => (
          <div
            key={idx}
            className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform"
          >
            {/* Colored accent bar */}
            <div
              className="absolute left-0 top-0 h-full w-1.5 rounded-l-2xl"
              style={{ backgroundColor: item.bg.replace("bg-", "").replace("-100", "") }}
            />

            <div className="flex items-start gap-4 pl-4">
              {/* Icon */}
              <div className={`w-12 h-12 flex items-center justify-center ${item.bg} rounded-full shrink-0`}>
                {item.icon}
              </div>

              {/* Heading + Text */}
              <div>
                <h3 className="font-julius font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}