import Nav from "@/components/nav";
import Link from "next/link";
import Image from "next/image";
import { BiArrowBack, BiCapsule, BiHappyHeartEyes, BiLocationPlus, BiStopwatch } from "react-icons/bi";
import Paragraph from "@/components/paragraph";

export default function Details({ params }) {
  const jobID = params.id;
  return (
    <div className="bg-[#eff0f4] flex flex-col h-screen">
      <div className="bg-green-950">
        <Nav />
      </div>
      {/* container of job details */}
      <div className="w-full h-full container mx-auto pt-10">
        {/* arow back to main page */}
        <Link href="/" className="p-3 text-md flex flex-row items-center gap-2">
            <BiArrowBack />
            <span className="text-lg mb-1">see all jobs</span>
        </Link>
        {/* show details of job posted */}
        <div className="w-full bg-white rounded-lg">
          {/* title and logo of the company posted the job */}
          <div className="w-full flex flex-col items-center gap-3">
            {/* logo */}
            <div className="">
              <Image src={"/images/company-4.jpg"} alt={"company logo"} width={200} height={200}/>
            </div>
            {/* job tatil */}
            <div className="flex flex-col items-center">
              <Paragraph title="Field Monitor – Stand by – Female (AR-HR-033-23)" style="text-md"/>
              <Paragraph title="ARADA, Multi Location" style="text-md font-bold text-gray-400"/>
            </div>
            {/* apply and bookmark button */}
            <div className="mt-2 flex flex-row justify-center gap-3">
              <buttton className="btn btn-md bg-slate-500 rounded-lg p-3">Bookmark</buttton>
              <buttton className="btn btn-md bg-slate-500 rounded-lg p-3">apply now</buttton>
            </div>
            {/* location, education, time type and number of times visited */}
          </div>
          {/* other details of the job that must mention */}
          <div className="container mx-auto pt-5">
            <div className="border-y-2 py-5 flex flex-row items-center justify-center gap-3 text-slate-500">
              {/* education degree and icon */}
              <div className="flex flex-row items-center justify-center gap-1">
                <BiCapsule className="text-lg"/>
                <span>Bachelor's Degree</span>
              </div>
              {/* location */}
              <div className="flex flex-row items-center justify-center gap-1">
                <BiLocationPlus className="text-lg"/>
                <span>Multi Location (Kabul, Balkh, Samangan)</span>
              </div>
              {/* time type */}
              <div className="flex flex-row items-center justify-center gap-1">
                <BiStopwatch className="text-lg"/>
                <span>Full Time</span>
              </div>
              {/* number of people view job */}
              <div className="flex flex-row items-center justify-center gap-1">
                <BiHappyHeartEyes className="text-lg"/>
                <span>100</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
