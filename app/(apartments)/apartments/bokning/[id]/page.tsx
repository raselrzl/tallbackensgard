import Image from "next/image";
import { apartments } from "../../data";

export default function ApartmentPage({
  params,
}: {
  params: { id: string };
}) {

  const apartment = apartments.find(
    (a) => a.id === params.id
  );

  if (!apartment) {
    return <div className="p-20 text-center">Apartment not found</div>;
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <h1 className="text-4xl font-julius mb-8">
        {apartment.title}
      </h1>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {apartment.images.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt="Apartment"
            width={600}
            height={400}
            className="rounded-xl object-cover w-full h-[300px]"
          />
        ))}
      </div>

      <p className="text-gray-600 max-w-2xl">
        {apartment.description}
      </p>

    </section>
  );
}