import JobContainer from "./jobContainer/container";
import Image from "next/image";
function RecentJobs() {
  return (
    <div className="container mx-auto flex-row w-full bg-[#f8f9fa] p-10">
      <div className="flex gap-10 p-5 ">
        <div className="flex w-3/4 flex-wrap gap-3 justify-start">
          <div className="row w-full">
            <p className="font-bold pb-4 text-xl">RECENTLY ADDED JOBS</p>
            <h1 className="text-5xl pb-5">Featured Jobs Posts For This Week</h1>
          </div>
          <JobContainer />
          <JobContainer />
          <JobContainer />
          <JobContainer />
          <JobContainer />
          <JobContainer />
        </div>
        <div className="w-3/12 flex-row">
          <div className="flex justify-center">
            <h3 className="text-4xl p-5">Top Companyes</h3>
          </div>
          <div className="flex-col px-5 py-0">
            <Image
              src={"/images/company-1.jpg"}
              width={500}
              height={500}
              className="mt-5"
            />
            <div className="">
              <h3 className="text-lg">Company Name</h3>
              <p className="text-lg font-bold text-md">
                <span>100</span>
                <span> Open position </span>
              </p>
            </div>
          </div>

          <div className="flex-col px-5 py-0">
            <Image
              src={"/images/company-2.jpg"}
              width={500}
              height={500}
              className="mt-5"
            />
            <div className="">
              <h3 className="text-lg">Company Name</h3>
              <p className="text-lg font-bold text-md">
                <span>100</span>
                <span> Open position </span>
              </p>
            </div>
          </div>

          <div className="flex-col px-5 py-0">
            <Image
              src={"/images/company-3.jpg"}
              width={500}
              height={500}
              className="mt-5"
            />
            <div className="">
              <h3 className="text-lg">Company Name</h3>
              <p className="text-lg font-bold text-md">
                <span>100</span>
                <span> Open position </span>
              </p>
            </div>
          </div>

          <div className="flex-col px-5 py-0">
            <Image
              src={"/images/company-4.jpg"}
              width={500}
              height={500}
              className="mt-5"
            />
            <div className="">
              <h3 className="text-lg">Company Name</h3>
              <p className="text-lg font-bold text-md">
                <span>100</span>
                <span> Open position </span>
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default RecentJobs;
