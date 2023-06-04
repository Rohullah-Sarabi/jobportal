import Image from "next/image";
import Paragraph from "../paragraph";

export default function Company(props) {
  return (
    <div className="flex-col px-5 py-0">
      <Image src={props.image} width={500} height={500} className="mt-5" />
      <div className="">
        <Paragraph style={"text-lg"} title={props.company} />
        <p className="text-lg font-bold text-md">
          <span>{props.amount}</span>
          <span> Open position </span>
        </p>
      </div>
    </div>
  );
}
