import Link from 'next/link'
import React from 'react'

export default function contactpage() {
  return (
    <div>
      <h1>Contact page</h1>
      <Link href="/">Go to home page</Link>
    </div>
  )
}
export function generateMetadata(){
  return {
    title:"Contact Page",
    description:"Contact Page description"
  }
}