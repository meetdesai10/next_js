"use client";
import { useRouter } from "next/navigation";
import React from "react";
export default function TeacherDetails() {
  let rout = useRouter();
  return (
    <div>
      <h1>Teacher details</h1>
      <button onClick={() => rout.push("/login")}>Go to Login page</button>      
    </div>
  );
}
