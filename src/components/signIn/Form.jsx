"use client"
import Paragraph from "../paragraph";
import Button from "../button";
import Input from "../input";

export default function Form({title}) {
  return (
    <form action="" className="flex flex-col w-2/3 p-3">
      <Paragraph title={`${title} to your account`} style="text-lg font-bold text-black" />
      <label className="block mt-3">
        <span className=" after:ml-0.5 block text-sm font-medium text-slate-700">
          Email
        </span>
        <Input
          type="email"
          name="email"
          placeholder="you@example.com"
          style="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        />
      </label>
      <label className="block mt-3">
        <span className=" after:ml-0.5 block text-sm font-medium text-slate-700">
          Password
        </span>
        <Input
          type="password"
          name="password"
          placeholder="enter your password"
          style="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        />
      </label>
      <Button style="rounded-lg bg-blue-400 block my-3 p-2" title={title}/>
    </form>
  );
}
