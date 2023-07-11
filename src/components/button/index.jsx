"use client"
import { signIn } from "next-auth/react"

export default function Button({style,title}){
    return(
        <button className={`${style}`} onClick={() => signIn("google")}>
            {title}
        </button>
    )
}