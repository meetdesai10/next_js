"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function loginpage() {
  let rout=useRouter();
  return (
    <div>
      <h1>Login page</h1>
      <br />
      <Link href="/">Go to home page</Link>
      <button onClick={() => rout.push("/login/studentdetails")}>
        got to students details
      </button>
      <button onClick={() => rout.push("/login/teacherdetails")}>
        got to teachers details
      </button>
    </div>
  )
}
