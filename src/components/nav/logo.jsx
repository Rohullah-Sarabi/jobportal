"use client";
import Image from "next/image";
import Link from "next/link";
import EnglishContent from "@/eng";

export default function Logo() {
  const info = EnglishContent.nav.title;
  return (
    <Link href={info.link}>
      <div className="flex gap-3 text-2xl text-white font-bold">
        <Image
          alt={info.title + " logo"}
          src={info.image}
          height={35}
          width={35}
        />
        {info.title}
      </div>
    </Link>
  );
}
