"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function aboutpage() {
  let route = useRouter();
  return (
    <div>
      <h1>about page</h1>
      <Link href="/">Go to home page</Link>
      <button onClick={() => route.push("/about/studentname")}>
        got to students name
      </button>
      <button onClick={() => route.push("/about/teachername")}>
        got to teachers name
      </button>
    </div>
  );
}
