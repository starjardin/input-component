import React, { Component } from 'react'
import Input from "./Input.js"
import "./input_style.scss"

export default function App () {
  return (
    <div>
      <div className="container">
        <Input />
        <Input />
        <Input />
      </div>
      <div className="container">
        <Input />
        <Input />
        <Input />
      </div>
      <div className="container">
        <Input/>
      </div>
      <div className="container">
        <Input />
        <Input />
      </div>
      <div className="container">
        <Input />
        <Input />
      </div>
      <div className="container">
        <Input/>
      </div>
      <div className="container">
        <Input/>
        <Input/>
      </div>
      <div className="container">
        <Input/>
      </div>
      <div className="container">
        <Input />
      </div>
    </div>
  )
}
