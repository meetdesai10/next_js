"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export default function AboutStudentName() {
  let rout=useRouter();
  return (
    <div>
      <h1>ABout Student Name</h1>
      <button onClick={()=>rout.push("/about")}>Go to about page</button>
    </div>
  )
}
