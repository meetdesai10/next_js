"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
export default function page() {
  let rout = useRouter();
  return (
    <div style={{ display: "grid",width:"fit-content",gap:"10px" }}>
      <h1>Home page</h1>
      <Link href="/login">Go to login page</Link>
      <Link href="/about">Go to About page</Link>
      <Link href="/contact">Go to Contact page</Link>
      <button onClick={()=>rout.push("/login")}>Go To login page</button>
      <button onClick={()=>rout.push("/about")}>Go To About page</button>
      <button onClick={()=>rout.push("/contact")}>Go To Contact page</button>
    </div>
  );
}
