import Paragraph from "@/components/paragraph";
import Image from "next/image";
import Form from "@/components/signIn/Form";
import Button from "@/components/button";

export default function SignIn() {
  return (
    <div className="h-screen flex rounded-lg bg-[#F9F8FB]">
      {/* Sign In Form in left */}
      <div className="w-1/2 flex flex-col justify-center">
        {/* Sign In Form */}
        <div className="flex justify-center">
          <Form title={"Sign In"} />
        </div>
        {/* Sign In with other accounts like google account, github account ... */}
        <div className="flex flex-col">
          <div className="flex flex-row justify-center">
            <hr className="mt-3 mx-2 h-2 w-1/6"/>
            <Paragraph title={"Or continue with"} />
            <hr className="mt-3 mx-2 h-2 w-1/6"/>
          </div>
          <div className="flex flex-row justify-center gap-3 my-4">
            <Button style="btn bg-red-500 text-white p-1 w-1/4 rounded-md shadow-lg" title="Google"/>
            <Button style="btn bg-slate-800 text-white p-1 w-1/4 rounded-md shadow-lg" title="Github"/>
          </div>
        </div>
      </div>
      {/* image as sidebar in right */}
      <div className="w-1/2 flex items-center">
        <Image
          src="/images/sidebar.png"
          alt="sidebar Image"
          width={400}
          height={400}
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}

{
  /* <div className="h-screen bg-[#F9F8FB] flex justify-center items-center gap-5">
        <Link href={""}>
          <div className="bg-[#f9f8fbf1] flex-col border">
            <Image
              src={"/images/applicant1.png"}
              alt="applicant Icon"
              height={100}
              width={200}
              priority={true}
            />
            <Paragraph
              title={"Applicant"}
              style={"text-[#687864] text-center"}
            />
          </div>
        </Link>
        <button type="button">
          <div className="bg-[#f9f8fbf1] border flex-col">
            <Image
              src={"/images/em.png"}
              alt="empolyee Icon"
              height={200}
              width={200}
            />
            <Paragraph
              title={"Empolyee"}
              style={"text-[#687864] text-center"}
            />
          </div>
        </button>
      </div> */
}
