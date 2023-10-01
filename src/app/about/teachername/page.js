"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
useRouter
export default function AboutTeacherName() {
  let rout=useRouter();
  return (
    <div>
      <h1>About Teacher Name</h1>
      <button onClick={()=>rout.push("/about")}>Go to about page</button>
    </div>
  )
}
