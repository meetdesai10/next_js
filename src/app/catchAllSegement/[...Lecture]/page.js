import React from 'react'

export default function Lecture({params}) {
  return (
    <div>
    {
      params.Lecture.map((e)=>{
        return (
          <>
            <h1>{e}</h1>
          </>
        )
      })
    }
    </div>
  )
}
