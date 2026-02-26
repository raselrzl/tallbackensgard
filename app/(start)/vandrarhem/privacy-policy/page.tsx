"use client";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="relative w-full h-100 sm:h-130 2xl:h-160 flex items-center justify-center bg-black">
        <video
          src="/v8.mp4" // video file in /public folder
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-2xl md:text-5xl font-julius tracking-widest text-center"
        >
          <h1 className="text-sm sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide text-white">
            GDPR / Privacy Policy
          </h1>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-[#47d7ac] mx-auto mt-4 sm:mt-6" />
        </motion.div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-12 text-gray-700 leading-relaxed text-base md:text-lg">
          {/* Information Collection */}
          <div>
            <h2 className="text-2xl font-julius font-bold mb-4">
              Information Collection
            </h2>
            <div className="w-16 h-0.5 bg-[#47d7ac] mb-6 rounded-full" />
            <p className="text-justify">
              On our website{" "}
              <span className="font-bold">www.tallbackensgard.se</span> we
              collect information from you when you contact us via a contact
              form. The information collected includes your name, your email
              address, and other information you voluntarily provide.
            </p>
            <p className="text-justify mt-4">
              When you visit the website, we also automatically receive and
              store information from your computer and browser, including your
              IP address, software and hardware information, and the pages you
              request.
            </p>
          </div>

          {/* Use of Information */}
          <div>
            <h2 className="text-2xl font-julius font-bold mb-4">
              Use of Information and Purpose
            </h2>
            <div className="w-16 h-0.5 bg-[#47d7ac] mb-6 rounded-full" />
            <ul className="list-disc list-inside space-y-2">
              <li>Contact you via email or phone number</li>
              <li>Improve our website</li>
              <li>Improve our customer service</li>
            </ul>
          </div>

          {/* Disclosure */}
          <div>
            <h2 className="text-2xl font-julius font-bold mb-4">
              Disclosure to Third Parties
            </h2>
            <div className="w-16 h-0.5 bg-[#47d7ac] mb-6 rounded-full" />
            <p className="text-justify">
              We do not sell, trade, or otherwise transfer personally
              identifiable information to outside parties. This does not include
              trusted third parties who help us operate our website, provided
              that these parties agree to keep the information confidential.
            </p>
          </div>

          {/* Information Protection */}
          <div>
            <h2 className="text-2xl font-julius font-bold mb-4">
              Information Protection
            </h2>
            <div className="w-16 h-0.5 bg-[#47d7ac] mb-6 rounded-full" />
            <p className="text-justify">
              We take a variety of security measures to protect your personal
              information. We use advanced encryption methods to protect
              information transmitted over the internet. Only employees required
              for a specific task (e.g., reservations) have access to personally
              identifiable information.
            </p>
            <p className="text-justify">
              The computers/servers used to store personally identifiable
              information are stored in a secure environment.
            </p>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="text-2xl font-julius font-bold mb-4">Cookies</h2>
            <div className="w-16 h-0.5 bg-[#47d7ac] mb-6 rounded-full" />
            <p className="text-justify">
              We use cookies to improve access to our website and identify
              repeat visitors. Cookies also improve the user experience by
              tracking and targeting user interests. Our use of cookies is not
              linked to any personally identifiable information.
            </p>
          </div>

          {/* Delete Personal Data */}
          <div>
            <h2 className="text-2xl font-julius font-bold mb-4">
              Delete Personal Data
            </h2>
            <div className="w-16 h-0.5 bg-[#47d7ac] mb-6 rounded-full" />
            <p>
              You can contact us at{" "}
              <a
                href="mailto:info@tallbackensgard.se"
                className="underline font-bold underline-offset-4 hover:text-[#47d7ac] transition"
              >
                info@tallbackensgard.se
              </a>{" "}
              to receive information about what personal data we have saved
              about you or request deletion.
            </p>
          </div>

          {/* Consent */}
          <div>
            <h2 className="text-2xl font-julius font-bold mb-4">Consent</h2>
            <div className="w-16 h-0.5 bg-[#47d7ac] mb-6 rounded-full" />
            <p className="text-justify">
              By using our website and contact form, you agree to our privacy
              policy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
