import React from 'react'

export default function BabyName({name,id,sex}) {
const styleClass = `babyCard ${sex}`
  return (
    <li className={styleClass}>{name}</li>
  )
}
