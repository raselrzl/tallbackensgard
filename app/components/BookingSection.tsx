import SirvoyBookingForm from "@/app/components/SirvoyBooking";

export default function BookingSection() {
  return (
    <section className="py-20 px-6 bg-gray-50 font-julius" id="booking">
      <div className="max-w-7xl mx-auto text-center bg-white rounded-2xl shadow-lg">

        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 pt-6">
          Boka enkelt ditt boende här
        </h1>

        <p className="text-gray-600 text-sm mb-6 px-8">
          Välj datum och boka ditt boende snabbt och smidigt.
        </p>

        <SirvoyBookingForm />

      </div>
    </section>
  );
}