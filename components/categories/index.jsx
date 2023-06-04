import Card from "@/components/Cart";
import Link from "next/link";
import { Fragment } from "react";
import Button from "../button";

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
        <Button
          style="bg-transparent transform shadow-lg hover:bg-[#8fc1e3] hover:scale-105 duration-700 text-[#31708E] hover:text-black py-2 px-4 border border-[#8fc1e3] hover:border-transparent rounded"
          title="BROWSE ALL SECTORS"
        />
      </div>
    </div>
  );
}

export default Categories;
