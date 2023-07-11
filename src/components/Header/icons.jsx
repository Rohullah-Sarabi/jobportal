import { BiWorld } from "react-icons/bi";
import { HiBuildingOffice } from "react-icons/hi2";
import { HiUsers } from "react-icons/hi";
import IconContent from "./components/iconsContent";

export default function HeaderIcons() {
  return (
    <div className="container mx-auto p-5 flex justify-evenly items-center">
      <div className="flex text p-2">
        <div className="mr-2 text-6xl">
          {/* icon */}
          <BiWorld />
        </div>
        {/* countries */}
        <IconContent title={"Countries"} />
      </div>

      <div className=" p-2 flex text">
        <div className="mr-2 text-6xl">
          {/* icon */}
          <HiBuildingOffice />
        </div>
        <IconContent title={"Companies"} />
      </div>

      <div className="flex text p-2">
        <div className="mr-2 text-6xl">
          {/* icon */}
          <HiUsers />
        </div>
        {/* countries */}
        <IconContent title={"Active Employees"} />
      </div>
    </div>
  );
}
