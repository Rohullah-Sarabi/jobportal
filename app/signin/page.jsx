import Paragraph from "@/components/paragraph";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="h-screen bg-[#F9F8FB] flex justify-center items-center gap-5">
      <Link href={"/signin/applicant"}>
        <div className="bg-[#f9f8fbf1] flex-col border">
          <Image
            src={"/images/pngegg.png"}
            alt="applicant Icon"
            height={100}
            width={200}
            priority={true}
            className="border border-red-800"
          />
          <Paragraph title={"Applicant"} style={"text-[#687864] text-center"} />
        </div>
      </Link>
      <Link href={"/signin/empolyee"}>
        <div className="bg-[#f9f8fbf1] border flex-col">
          <Image
            src={"/images/em.png"}
            alt="empolyee Icon"
            height={200}
            width={200}
          />
          <Paragraph title={"Empolyee"} style={"text-[#687864] text-center"} />
        </div>
      </Link>
    </div>
  );
}
