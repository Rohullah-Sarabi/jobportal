import Link from "next/link";
import Paragraph from "../paragraph";
import EnglishContent from "@/eng";

export default function Footer() {
  const info = EnglishContent.footer;
  return (
    <div className="">
      <div className="w-full h-[50vh] flex justify-evenly pt-16">
        <div className="w-1/5">
          <Paragraph
            style="text-xl mb-5 font-semibold px-5"
            title={"Employers"}
          />
          {info.Employers.map((item) => (
            <Link href={item.link} className="hover:text-[#687864]">
              <Paragraph style={"text-md mb-2 px-5"} title={item.title} />
            </Link>
          ))}
        </div>
        <div className="w-1/5">
          <Paragraph
            style="mb-5 text-xl font-semibold px-5 mb-2"
            title={"Browse Jobs"}
          />
          {info.Jobs.map((item) => (
            <Link href={item.link} className="hover:text-[#687864]">
              <Paragraph style={"text-md px-5 mb-2"} title={item.title} />
            </Link>
          ))}
        </div>
        <div className="w-1/5">
          <Paragraph
            style="mb-5 text-xl font-semibold px-5"
            title={"Account"}
          />
          {info.Account.map((item) => (
            <Link href={item.link} className="hover:text-[#687864]">
              <Paragraph style={"text-md px-5 mb-2"} title={item.title} />
            </Link>
          ))}
        </div>
        <div className="w-1/4">
          <Paragraph
            style="mb-5 text-xl font-semibold px-5"
            title={"Have a Questions?"}
          />
          {info.question.map((item) => (
            <div className="flex gap-2">
              {item.icon}
              <Paragraph style={"text-md mb-2 px-5"} title={item.title} />
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto p-5 text-center">
        Copyright ©{new Date().getFullYear()} All rights reserved
      </div>
    </div>
  );
}
