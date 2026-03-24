"use client";

import { useState, FormEvent } from "react";

export default function CorporateContactForm({
  onClose,
}: {
  onClose: () => void;
}) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    customerType: "",
    country: "",
    message: "",
    consent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const target = e.target as
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement;
    let value: string | boolean = target.value;

    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      value = target.checked;
    }

    setFormData((prev) => ({
      ...prev,
      [target.name]: value,
    }));
  };

 /*  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Företagsformulär:", formData);
    alert("Formuläret skickat! Kolla konsolen för data.");
    onClose();
  }; */
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();

  if (!formData.consent) {
    alert("You must accept the privacy policy.");
    return;
  }

  try {
    const res = await fetch("/api/company-contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Message sent successfully!");
      onClose();

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        customerType: "",
        country: "",
        message: "",
        consent: false,
      });
    } else {
      alert(data.message || "Something went wrong");
    }
  } catch (error) {
    console.error(error);
    alert("Failed to send message");
  }
};
  return (
    <section className="font-julius w-full px-4 sm:px-6 md:px-8">
      <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto bg-white pb-8 px-4 rounded-2xl overflow-y-auto max-h-[90vh]">
        {/* GIF */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <img
            src="/logo.gif"
            alt="Företagskontakt"
            className="h-40 object-contain"
          />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">
          Kontakta oss
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-6 text-sm sm:text-base">
          Lämna din kontaktinformation och beskriv ditt boendebehov!
        </p>

        <form className="space-y-2 md:space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              type="text"
              name="firstName"
              placeholder="Förnamn"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-gray-100 dark:bg-gray-800 outline-none text-gray-900 dark:text-white"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Efternamn"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-gray-100 dark:bg-gray-800 outline-none text-gray-900 dark:text-white"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-gray-100 dark:bg-gray-800 outline-none text-gray-900 dark:text-white"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-gray-100 dark:bg-gray-800 outline-none text-gray-900 dark:text-white"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <select
              name="customerType"
              value={formData.customerType}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-gray-100 dark:bg-gray-800 outline-none text-gray-900 dark:text-white"
              required
            >
              <option value="">Kundtyp </option>
              <option value="company">Företag</option>
              <option value="project">Projektboende</option>
            </select>

            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Land"
              className="w-full p-3 rounded-xl bg-gray-100 dark:bg-gray-800 outline-none text-gray-900 dark:text-white"
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Meddelande (Obligatoriskt)"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            maxLength={1000}
            className="w-full p-3 rounded-xl bg-gray-100 dark:bg-gray-800 outline-none text-gray-900 dark:text-white resize-none"
            required
          />

          <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-[10px]">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
            />
            Jag godkänner webbplatsens integritetspolicy.
          </label>

          <button
            type="submit"
            className="w-full bg-[#47d7ac] hover:bg-[#36b795] text-white font-julius font-semibold text-xs rounded-full py-2 sm:py-3 transition"
          >
            Skicka
          </button>
        </form>
      </div>
    </section>
  );
}
