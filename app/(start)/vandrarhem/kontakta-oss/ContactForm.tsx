"use client";

import { useState, FormEvent } from "react";
import { User, Mail, Edit3, MessageCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    consent: false,
    captcha: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, type } = target;
    const value = type === "checkbox" ? target.checked : target.value;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form submitted! Check console for data.");
  };

  return (
    <section className="max-w-5xl mx-auto my-20  font-julius">
      <div className="grid grid-cols-1">
        {/* Left Side: Image + Contact Info */}
        {/*      <div
          className="relative h-96 md:h-auto bg-cover bg-center flex flex-col justify-end p-10 text-black"
          style={{
            backgroundImage: "url('/contact4.png')", // replace with your image
          }}
        >
          <div className="relative z-10 font-julius text-right md:text-left pt-6 text-xs md:text-sm">
            <p>Finspångsvägen 497<br />605 80 Svärtinge</p>
            <p>
              Telefon:{" "}
              <a href="tel:0103333536" className="underline">
                010-333 35 36
              </a>
            </p>
            <p>Telefontider: 10:00–17:00 alla dagar</p>
            <p>
              Email:{" "}
              <a href="mailto:info@tallbackensgard.se" className="underline">
                info@tallbackensgard.se
              </a>
            </p>
          </div>
        </div> */}

        {/* Right Side: Form */}
        <div className="bg-white dark:bg-gray-900 p-8 md:p-12">
          <form
            className="space-y-6 rounded-2xl overflow-hidden shadow-xl p-8"
            onSubmit={handleSubmit}
          >
            <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 rounded-xl p-3">
              <User className="w-5 h-5 text-gray-500 dark:text-gray-300" />
              <input
                type="text"
                name="name"
                placeholder="Namn"
                value={formData.name}
                onChange={handleChange}
                className="flex-1 bg-transparent outline-none text-gray-900 dark:text-white"
                required
              />
            </div>

            <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 rounded-xl p-3">
              <Mail className="w-5 h-5 text-gray-500 dark:text-gray-300" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="flex-1 bg-transparent outline-none text-gray-900 dark:text-white"
                required
              />
            </div>

            <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 rounded-xl p-3">
              <Edit3 className="w-5 h-5 text-gray-500 dark:text-gray-300" />
              <input
                type="text"
                name="subject"
                placeholder="Ämne"
                value={formData.subject}
                onChange={handleChange}
                className="flex-1 bg-transparent outline-none text-gray-900 dark:text-white"
                required
              />
            </div>

            <div className="flex items-start gap-3 bg-gray-100 dark:bg-gray-800 rounded-xl p-3">
              <MessageCircle className="w-5 h-5 text-gray-500 dark:text-gray-300 mt-1" />
              <textarea
                name="message"
                placeholder="Meddelande"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="flex-1 bg-transparent outline-none text-gray-900 dark:text-white resize-none"
                required
              />
            </div>

            <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
              />
              Jag godkänner webbplatsens integritetspolicy.
            </label>

            <div className="flex items-center gap-3">
              <span className="text-gray-700 dark:text-gray-300">4 + 1 = </span>
              <input
                type="text"
                name="captcha"
                value={formData.captcha}
                onChange={handleChange}
                className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-xl p-3 outline-none text-gray-900 dark:text-white"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#47d7ac] hover:bg-[#36b795] text-white font-julius font-semibold text-lg rounded-xl py-3 transition"
            >
              Skicka
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
