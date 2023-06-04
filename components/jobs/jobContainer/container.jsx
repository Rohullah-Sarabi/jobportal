import Link from "next/link";
import { MdLayers, MdMyLocation } from "react-icons/md";
import { BsBookmarkCheckFill } from "react-icons/bs";

import Paragraph from "@/components/paragraph";
import Button from "@/components/button";

function JobContainer() {
  return (
    <>
      <div className="flex w-full shadow-lg rounded-lg p-5 border transform hover:bg-white hover:scale-105 duration-700">
        <div className="row w-4/5">
          <div className="p-2">
            <Paragraph style={"text-sm md:text-md uppercase text-[#687864"} title={"intership"}/>
            <Paragraph style={"text-md md:text-2xl py-5"} title={"Frontend Development"}/>
          </div>
          <div className="flex gap-5 text-sm">
            <div className="flex items-center gap-1 uppercase">
              <MdLayers />
              <Link href={"/"}>Job company name</Link>
            </div>
            <div className="flex items-center gap-1 uppercase">
              <MdMyLocation />
              <span>city , conutry</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center text-sm lg:text-md w-1/5">
          <Button style="btn border p-3 rounded-lg transform hover:bg-[#8FC1E3] " title={"Apply Job"}/>
        </div>
      </div>
    </>
  );
}

export default JobContainer;
