"use client";

import { useEffect } from "react";

export default function SirvoyBookingForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://secured.sirvoy.com/widget/sirvoy.js";
    script.async = true;
    script.setAttribute("data-form-id", "5a0c3c942c361");

    const container = document.getElementById("sirvoy-form");

    if (container && !container.hasChildNodes()) {
      container.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full flex justify-center bg-white">
      <div
        id="sirvoy-form"
        className="w-full max-w-7xl  p-6 md:p-10"
      />
    </div>
  );
}