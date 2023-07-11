import Company from "./company";

export default function Asidebar() {
  return (
    <div className="flex sm:w-3/12 sm:flex-col ">
      {/* title */}

      {/* <div className="flex justify-center text-[#687864]">
        <Paragraph style={"text-3xl px-5"} title={"Top Companyes"}/>
      </div> */}
      
      {/* companies name logo and opening jobs they have */}
      <Company
        image={"/images/company-1.jpg"}
        title={"Company Name"}
        amount={100}
      />
      <Company
        image={"/images/company-2.jpg"}
        title={"Company Name"}
        amount={100}
      />
      <Company
        image={"/images/company-3.jpg"}
        title={"Company Name"}
        amount={100}
      />
      <Company
        image={"/images/company-4.jpg"}
        title={"Company Name"}
        amount={100}
      />
      {/* company end */}
    </div>
  );
}
