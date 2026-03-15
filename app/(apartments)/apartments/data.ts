export type Apartment = {
  id: string;
  title: string;
  features: string[];
  rating: string;
  reviews: string;
  price: string;
  description: string;
  images: string[];
};

export const apartments: Apartment[] = [
  {
    id: "84384",
    title: "Talbackans Lägenhetshotell Alvik",
    features: ["Kök", "WiFi", "Frukost (extra avgift)", "Mikrovågsugn"],
    rating: "7.3",
    reviews: "3303",
    price: "680",
    description:
      "Modernt lägenhetshotell perfekt för affärsresenärer. Nära tunnelbana och restauranger.",
    images: ["/herov.png", "/ap.jpg", "/ap2.png"],
  },
  {
    id: "843cc84",
    title: "Talbackans Lägenhetshotell Bromma",
    features: ["Parkering", "WiFi", "Frukost (extra avgift)", "Mikrovågsugn"],
    rating: "7.9",
    reviews: "2078",
    price: "725",
    description: "Bekväma serviced apartments nära Bromma flygplats.",
    images: ["/ap1.png", "/ap.jpg", "/ap2.png"],
  },
  {
    id: "8438wefw6g4",
    title: "Talbackans Aparthotel Arlanda",
    features: ["WiFi", "Kylskåp", "Självincheckning"],
    rating: "7.8",
    reviews: "3516",
    price: "799",
    description: "Perfekt boende nära Arlanda flygplats.",
    images: ["/ap1.png", "/ap.jpg", "/ap2.png"],
  },

  {
    id: "8438wefw6ddsgsg",
    title: "Talbackans Aparthotel Norrköping",
    features: ["WiFi", "Kylskåp", "Självincheckning"],
    rating: "7.8",
    reviews: "3516",
    price: "799",
    description: "Perfekt boende nära Arlanda flygplats.",
    images: ["/ap2.png", "/ap.jpg", "/ap2.png"],
  },

  {
    id: "8438wefw6djddsgsg",
    title: "Talbackans Aparthotel Norrköping",
    features: ["WiFi", "Kylskåp", "Självincheckning"],
    rating: "7.8",
    reviews: "3516",
    price: "799",
    description: "Perfekt boende nära Arlanda flygplats.",
    images: ["/ap1.png", "/ap.jpg", "/ap2.png"],
  },

  {
    id: "8438wefw6heuddsgsg",
    title: "Talbackans Aparthotel Norrköping",
    features: ["WiFi", "Kylskåp", "Självincheckning"],
    rating: "7.8",
    reviews: "3516",
    price: "799",
    description: "Perfekt boende nära Arlanda flygplats.",
    images: ["/ap2.png", "/ap.jpg", "/ap2.png"],
  },
];
