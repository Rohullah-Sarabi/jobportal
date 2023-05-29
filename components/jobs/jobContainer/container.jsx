import Link from "next/link";

import { MdLayers, MdMyLocation } from "react-icons/md";
import { BsBookmarkCheckFill } from "react-icons/bs";

function JobContainer() {
  return (
    <>
    <div className="flex w-full rounded-lg p-5 border hover:bg-white">
      <div className="row w-4/5">
        <div className="p-2">
          <span className="text-lg py-5 uppercase text-green-900">
            intership
          </span>
          <h3 className="text-3xl py-5">Frontend Development</h3>
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
      <div className="flex flex-col justify-center items-end gap-5 text-lg w-1/3">
        <button
          class="text-xl transform hover:scale-105 duration-500 rounded-full hover:text-red-800"
          type="button"
        >
          <BsBookmarkCheckFill />
        </button>
        <button
          className="btn border px-5 py-3 rounded-lg bg-green-700 text-white text-start"
          type="button"
        >
          Apply Job
        </button>
      </div>
    </div>
  </>
  );
}

export default JobContainer;
