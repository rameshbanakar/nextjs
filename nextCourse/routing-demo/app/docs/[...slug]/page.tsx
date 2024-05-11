import React from 'react'

export default function Docs({params}:{params:{slug:String}}) {
  return (
    <div>viewing docs feature for{params.slug[0]} and concept feature of {params.slug[1]}</div>
  )
}
