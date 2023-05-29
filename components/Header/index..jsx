import { BiWorld } from "react-icons/bi";
import { HiBuildingOffice} from "react-icons/hi2";
import { HiUsers} from "react-icons/hi";
import Nav from "@/components/nav";
import Search from "../Search";

function Header() {
  return (
    <div
      className={`w-full h-screen bg-[url(/images/bg_1.jpg)] bg-cover bg-center text-[#ffffffcc]`}
    >
      {/* bg-green-600/30 */}
      <div className="w-screen h-screen  backdrop-brightness-50">
        <Nav />
        <div className="container mx-auto mt-10">
          <div className="py-5">
            <div className="flex flex-col justify-center text-center pt-5 my-5">
              <p className="mb-4 text-md">
                Find Job, Employment, and Career Opportunities
              </p>
              <h1 className="mb-7 w-full text-6xl justify-center lg:text-6xl md:text-4xl">
                The Eassiest Way to Get Your New Job
              </h1>
              <div className="container mx-auto">
                <div className="p-4  flex justify-evenly items-center">
                  <div className="p-2">
                    <div className="flex text">
                      <div className="mr-2 text-7xl">
                        {/* icon */}
                        <BiWorld />
                      </div>
                      {/* countries */}
                      <div className="row text-start text-lg">
                        <strong
                          className="block p-1 text-start"
                          data-number="46"
                        >
                          0
                        </strong>
                        <span className="p-1">Countries</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-2">
                    <div className="flex text">
                      <div className="mr-2 text-7xl">
                        {/* icon */}
                        <HiBuildingOffice />
                      </div>
                      {/* countries */}
                      <div className="row text-start text-lg">
                        <strong
                          className="block p-1 text-start"
                          data-number="46"
                        >
                          0
                        </strong>
                        <span className="p-1">Companies</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-2">
                    <div className="flex text">
                      <div className="mr-2 text-7xl">
                        {/* icon */}
                        <HiUsers />
                      </div>
                      {/* countries */}
                      <div className="row text-start text-lg">
                        <strong
                          className="block p-1 text-start"
                          data-number="46"
                        >
                          0
                        </strong>
                        <span className="p-1">Active Employees</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-screen h-20 container mx-auto flex justify-center items-center">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Header;
