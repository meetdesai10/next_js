"use client";
import { useRouter } from "next/navigation";
import React from "react";
export default function StudentDetails() {
  let rout = useRouter();
  return (
    <div>
      <h1>Student Details</h1>
      <button onClick={() => rout.push("/login")}>Go to Login page</button>
    </div>
  );
}
