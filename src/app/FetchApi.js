"use client";
import Link from "next/link";
import React, { useEffect } from "react";

export default function FetchApi() {
//   useEffect(async () => {
//     let data = await fetch("https://dummyjson.com/products");
//     data = await data.json();
//   }, []);
  return <div>
    <Link href={"/fetch"}>CLick here to show data</Link>
  </div>;
}
