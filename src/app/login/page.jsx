import { AiOutlineArrowLeft } from "react-icons/ai";
import Paragraph from "@/components/paragraph";
import Form from "@/components/signIn/Form";
import Button from "@/components/button";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="h-screen flex rounded-lg bg-[#F9F8FB]">
      {/* Sign In Form in left */}
      <div className="w-1/2 flex flex-col justify-evenly">
        <div className="p-5 text-md">
          {/* return to home page */}
          <Link href="/" title="return Home">
            <AiOutlineArrowLeft /> Home
          </Link>
        </div>
        {/* Sign In Form */}
        <div className="flex justify-center">
          <Form title={"Login"} />
        </div>
        {/* Sign In with other accounts like google account, github account ... */}
        <div className="flex flex-col">
          <div className="flex flex-row justify-center">
            <hr className="mt-3 mx-2 h-2 w-1/6" />
            <Paragraph title={"Or continue with"} />
            <hr className="mt-3 mx-2 h-2 w-1/6" />
          </div>
          <div className="flex flex-row justify-center gap-3 my-4">
            <Button
              style="btn bg-red-500 text-white p-1 w-1/4 rounded-md shadow-lg"
              title="Google"
            />
            <Button
              style="btn bg-slate-800 text-white p-1 w-1/4 rounded-md shadow-lg"
              title="Github"
            />
          </div>
        </div>
      </div>
      {/* image as sidebar in right */}
      <div className="w-1/2 flex justify-center items-center">
        <Image
          src="/images/login.png"
          alt="sidebar Image"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}
