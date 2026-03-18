"use client";

import Image from "next/image";

export default function SocialLinks() {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/tallbackens-vandrarhem-apartments/about/?viewAsMember=true", // ändra till din länk
      icon: "/ic/in.png",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com", // ändra till din länk
      icon: "/ic/ins.png",
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com", // ändra till din länk
      icon: "/ic/tiktok.png",
    },
  ];

  return (
    <div className="flex items-center gap-3">
      {socialLinks.map((item) => (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className=" flex items-center justify-center hover:scale-105 transition-all duration-300"
        >
          <Image
            src={item.icon}
            alt={item.name}
            width={24}
            height={24}
            className="object-contain"
          />
        </a>
      ))}
    </div>
  );
}