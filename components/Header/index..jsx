import Nav from "@/components/nav";
import Search from "../Search";
import Paragraph from "../paragraph";
import HeaderIcons from "./icons";

function Header() {
  return (
    <div
      className={`w-full h-screen bg-[url(/images/bg_1.jpg)] bg-cover bg-center text-[#ffffffcc]`}
    >
      <div className="w-screen h-screen flex flex-col gap-20 backdrop-brightness-50">
        <Nav/>
        <div className="container mx-auto flex flex-col justify-center text-center">
          <Paragraph
            style={"mb-4 text-lg"}
            title={"Find Job, Employment, and Career Opportunities"}
          />
          <Paragraph
            style={
              "mb-7 w-full text-2xl justify-center lg:text-5xl md:text-4xl"
            }
            title={"The Eassiest Way to Get Your New Job"}
          />
          {/* country, companies, and active employees number that we are active there  */}
          <HeaderIcons />
        </div>
            {/* search box section */}
        <div className="w-screen h-20 container mx-auto flex justify-center items-center">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Header;
