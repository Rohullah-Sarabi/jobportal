import Paragraph from "../paragraph";
import Asidebar from "../sidebar";
import JobContainer from "./jobContainer/container";

function RecentJobs() {
  return (
    <div className="container mx-auto flex-col justify-center md:flex-row w-full p-10 flex gap-10">
      <div className="flex md:w-3/4 flex-wrap gap-8 justify-start">
        <div className="row w-full text-[#687864]">
          <Paragraph
            style="font-semibold pb-4 text-sm md:text-lg"
            title={"RECENTLY ADDED JOBS"}
          />
          <Paragraph
            style="text-xl sm:text-2xl md:text-3xl pb-5"
            title={"Featured Jobs Posts For This Week"}
          />
        </div>
        <JobContainer />
        <JobContainer />
        <JobContainer />
        <JobContainer />
        <JobContainer />
        <JobContainer />
      </div>
      <Asidebar/>
    </div>
  );
}

export default RecentJobs;
