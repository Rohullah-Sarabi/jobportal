import Card from "@/components/Cart";
import Link from "next/link";

function Categories() {
  return (
    <div className="row">
      <h1 className="text-4xl text-center py-10">Top Categories</h1>
      <div className="container mx-auto flex flex-wrap justify-center gap-9 p-5">
        <Link href={"/"}>
          <Card title={"Website & Software"} imageName={"computer"} />
        </Link>
        <Link href={"/"}>
          <Card title={"Education & Training"} imageName={"cap"} />
        </Link>
        <Link href={"/"}>
          <Card title={"Accounting & Finance"} imageName={"finance"} />
        </Link>
        <Link href={"/"}>
          <Card title={"Restaurant & Food"} imageName={"food"} />
        </Link>
        <Link href={"/cat/10"}>
          <Card title={"Health & Hospital"} imageName={"healt and hospital"} />
        </Link>
      </div>
      <div className="flex py-5 justify-center">
        <button className="bg-transparent transform hover:bg-green-600 hover:scale-105 duration-700 text-green-800 font-semibold hover:text-white py-2 px-4 border border-green-600 hover:border-transparent rounded">
          BROWSE ALL SECTORS
        </button>
      </div>
    </div>
  );
}

export default Categories;
