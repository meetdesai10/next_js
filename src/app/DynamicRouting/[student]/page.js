import React from 'react'

export default function student({params}) {
  return (
    <>
      <h1>Students List</h1>
      <h1>Name : {params.student}</h1>
    </>
  )
}
