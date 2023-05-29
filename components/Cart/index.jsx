import Image from "next/image";
function Card(props){
    return(
        <div className="row items-baseline h-52 w-60 border transform rounded-lg hover:bg-green-600 hover:scale-105 duration-700 cursor-pointer">
            <div className="relative left-1/4 w-1/2 pt-3 text-center">
                <p className="text-md">{props.title}</p>
            </div>
            <div className="flex justify-center text-9xl">
                <Image src={`/images/${props.imageName}.png`} height={100} width={100} className="p-3"/>
            </div>
            <div className="flex justify-center">
                <span className="mx-2">1024</span>
                Open position
            </div>
        </div>
    )
}

export default Card;