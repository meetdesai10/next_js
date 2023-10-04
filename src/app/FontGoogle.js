import { Roboto } from 'next/font/google'
import React from 'react'
const roboto =Roboto({
    weight:"100",
    subsets:['latin'],
    display:"swap"
})

export default function FontGoogle() {
  return (
    <div>
      <h1>Helo i am meet desai</h1>
      <h1 className={roboto.className}>I am lerning lern next js </h1>
    </div>
  )
}
