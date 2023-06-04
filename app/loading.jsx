import Image from "next/image"
export default function Loading(){
    return(
        <div className="loading">
            <Image src={"load.svg"} width={100} height={100} alt="Loading"/>
        </div>
    )
}