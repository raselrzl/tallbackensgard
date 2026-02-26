"use client";

import { useState, FormEvent } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SearchBookingModal() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    bookingNumber: "",
    lastName: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Search Booking:", formData);
    alert(`Searching booking for:\nNumber: ${formData.bookingNumber}\nLast Name: ${formData.lastName}`);
    setOpen(false);
  };

  return (
    <div className="mt-6 text-center">
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="px-8 py-3 bg-[#47d7ac] text-xs text-white font-julius font-semibold rounded-full shadow-lg hover:bg-[#36b795] transition duration-300"
      >
        Sök befintlig bokning här
      </button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-xs p-6 relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Header */}
              <h3 className="text-2xl font-julius font-bold text-gray-900 dark:text-white mb-4 text-center">
                Sök befintlig bokning
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-center mb-6">
                Fyll i ditt bokningsnummer och efternamn för att hitta din bokning.
              </p>

              {/* Form */}
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="bookingNumber"
                  placeholder="Bokningsnummer"
                  value={formData.bookingNumber}
                  onChange={handleChange}
                  className="w-full bg-gray-100 dark:bg-gray-800 rounded-xs p-3 outline-none text-gray-900 dark:text-white"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Efternamn"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-gray-100 dark:bg-gray-800 rounded-xs p-3 outline-none text-gray-900 dark:text-white"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-[#47d7ac] hover:bg-[#36b795] text-white font-julius font-semibold rounded-xs py-3 transition"
                >
                  Sök
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}