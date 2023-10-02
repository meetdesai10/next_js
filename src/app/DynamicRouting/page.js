import Link from "next/link";
import React from "react";
import "./studentDetails.css";

export default function page() {
  return ( 
    <>
      <h1>Students List</h1>
      <ul style={{ display: "grid" }}>
        <Link href={"/DynamicRouting/meet"}>Meet</Link>
        <Link href={"/DynamicRouting/arjun"}>Arjun</Link>
        <Link href={"/DynamicRouting/kashyap"}>Kashyap</Link>
        <Link href={"/DynamicRouting/harsh"}>Harsh</Link>
        <Link href={"/DynamicRouting/darshan"}>Darshan</Link>
        <Link href={"/DynamicRouting/parth"}>Parth</Link>
      </ul>
    </>
  );
}
