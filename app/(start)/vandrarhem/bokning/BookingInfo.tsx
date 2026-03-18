"use client";

import { XCircle, Calendar, Phone, Clock } from "lucide-react";

export default function BookingInfo() {
  const infoData = [
    {
      icon: <XCircle className="w-6 h-6 text-red-500" />,
      bg: "bg-red-100",
      title: "Rökning förbjuden",
      points: [
        "Rökning är förbjuden i samtliga rum",
        "Omedelbar avvisning vid överträdelse",
        "Avgift: 10 000 SEK",
      ],
    },
/*     {
      icon: <Calendar className="w-6 h-6 text-blue-500" />,
      bg: "bg-blue-100",
      title: "Avbokning",
      points: [
        "Fri avbokning upp till 48 timmar före ankomst",
        "Senare avbokning: 100% debitering",
      ],
    }, */
    {
      icon: <Phone className="w-6 h-6 text-green-500" />,
      bg: "bg-green-100",
      title: "Mobilnummer",
      points: ["Giltigt mobilnummer krävs", "Dörrkod skickas vid ankomst"],
    },
    {
      icon: <Clock className="w-6 h-6 text-yellow-500" />,
      bg: "bg-yellow-100",
      title: "Incheckning / Utcheckning",
      points: ["Incheckning från 16:00", "Utcheckning senast 11:00"],
    },
  ];

  return (
    <section className="max-w-7xl mx-auto p-4 md:p-8 space-y-6 mb-10 bg-gray-50">
      <h2 className="text-2xl md:text-3xl font-julius font-bold text-gray-900 dark:text-white text-center mb-6">
        Bokningsinformation
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

              {/* Heading + Bullet Points */}
              <div>
                <h3 className="font-julius font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}