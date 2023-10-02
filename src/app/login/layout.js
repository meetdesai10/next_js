"use client";
import Link from "next/link";
import React from "react";
import "./login.css";
import { usePathname } from "next/navigation";
export default function layout({ children }) {
  let path = usePathname();
  return (
    <div className="login">
      {path != "/login/teacherdetails" ? (
        <ul>
          <li>
            <Link href={"/login"}>Login Main</Link>
          </li>
          <li>
            <Link href={"/login/studentdetails"}>Student Details</Link>
          </li>
          <li>
            <Link href={"/login/teacherdetails"}>Teacher Details</Link>
          </li>
        </ul>
      ) : null}
      {children}
    </div>
  );
}
