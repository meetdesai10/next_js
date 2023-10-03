import React from "react";
import NavBar from "./NavBar";
import FetchApi from "./FetchApi";
import Link from "next/link";
export default function page() {
  return (
    <>
      {/* <NavBar /> */}
      {/* <FetchApi/> */}
      <Link href={"/bothComponent"}>Click here </Link>
    </>
  )
}