import Image from "next/image";
import Paragraph from "../paragraph";
function Card(props) {
  return (
    <div className="row items-baseline shadow-lg h-52 w-60 border transform rounded-lg hover:bg-[#8fc1e3] hover:scale-105 duration-700 cursor-pointer">
      <div className="relative left-1/4 w-1/2 pt-3 text-center">
        <Paragraph style={"text-md"} title={props.title} />
      </div>
      <div className="flex justify-center text-9xl">
        <Image
          src={`/images/${props.imageName}.png`}
          alt={props.title}
          height={100}
          width={100}
          className="p-3"
        />
      </div>
      <div className="flex justify-center">
        <span className="mx-2">1024</span>
        Open position
      </div>
    </div>
  );
}

export default Card;
