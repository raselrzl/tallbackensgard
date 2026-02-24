"use client";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/privacy-bg.jpg')" }} // change image if needed
        />
        <div className="absolute inset-0 bg-black/50" />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-white text-4xl md:text-5xl font-bold tracking-wide text-center"
        >
          GDPR / Privacy Policy
        </motion.h1>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-12 text-gray-700 leading-relaxed text-base md:text-lg">

          {/* Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Information Collection
            </h2>
            <div className="w-16 h-0.5 bg-green-600 mb-6" />
            <p>
              On our website www.tallbackensgard.se we collect information from
              you when you contact us via a contact form. The information
              collected includes your name, your email address and other
              information that you voluntarily choose to provide in the form's
              message box.
            </p>
            <p className="mt-4">
              When you visit the website, we also automatically receive and
              store information from your computer and browser, including your
              IP address, software and hardware information, and the page
              requested.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Use of Information and Purpose
            </h2>
            <div className="w-16 h-0.5 bg-green-600 mb-6" />
            <ul className="list-disc list-inside space-y-2">
              <li>Contact you via email or phone number.</li>
              <li>Improve our website.</li>
              <li>Improve our customer service.</li>
            </ul>
          </div>

          {/* Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Disclosure to Third Parties
            </h2>
            <div className="w-16 h-0.5 bg-green-600 mb-6" />
            <p>
              We do not sell, trade, or otherwise transfer personally
              identifiable information to outside parties. This does not include
              trusted third parties who help us operate our website, provided
              that these parties agree to keep the information confidential.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Information Protection
            </h2>
            <div className="w-16 h-0.5 bg-green-600 mb-6" />
            <p>
              We take a variety of security measures to protect your personal
              information. We use advanced encryption methods to protect
              information transmitted over the internet. Only employees who are
              required to perform a specific job (e.g. reservation service) have
              access to personally identifiable information.
            </p>
            <p className="mt-4">
              The computers/servers used to store personally identifiable
              information are stored in a secure environment.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
            <div className="w-16 h-0.5 bg-green-600 mb-6" />
            <p>
              We use cookies to improve access to our website and identify
              repeat visitors. In addition, cookies improve the user experience
              by tracking and targeting user interests. Our use of cookies is
              not linked to any personally identifiable information.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Delete Personal Data
            </h2>
            <div className="w-16 h-0.5 bg-green-600 mb-6" />
            <p>
              You can contact us at{" "}
              <a
                href="mailto:info@tallbackensgard.se"
                className="underline decoration-green-600 underline-offset-4 hover:text-green-700 transition"
              >
                info@tallbackensgard.se
              </a>{" "}
              to receive information about what personal data we have saved
              about you or if you want us to delete your personal data.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Consent</h2>
            <div className="w-16 h-0.5 bg-green-600 mb-6" />
            <p>
              By using our website and contact form, you agree to our privacy
              policy.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}