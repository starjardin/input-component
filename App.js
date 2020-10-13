import React, { Component } from 'react'
import Input from "./Input.js"
import "./input_style.scss"

export default function App () {
  return (
    <div>
      <div className="container">
        <Input 
          label="Label"
          iconStart="at-symbol"
        />
        <Input 
          label="Label"
          iconStart="search"
        />
        <Input 
          label="Label"
          iconStart="server"
        />
      </div>
      <div className="container">
        <Input 
          error
          label="Label"
        />
        <Input 
          error
          label="Label"
        />
        <Input 
          error
          label="Label"
        />
      </div>
      <div className="container">
        <Input disabled/>
      </div>
      <div className="container">
        {`< input helperText="some interesting text" text="error" />`}
        <Input 
          label="Label"
          helperText="some interesting text"
          text="text"
        />
        {`< input helperText="some interesting text" text="error" />`}
        <Input 
          label="Label"
          helperText="some interesting text"
          error
          text="error"
        />
      </div>
      <div className="container">
        <Input 
        />
        <Input 
        />
      </div>
      <div className="container">
        {`< input value="text" />`}
        <Input 
          value="Text"
          label="Label"
        />
      </div>
      <div className="container">
        <Input/>
        <Input/>
      </div>
      <div className="container">
        {`< input fullwidth />`}
        <Input 
          label="label"
          fullwidth="fullwidth"
        />
      </div>
      <div className="container">
        <Input multiline row="4"/>
      </div>
    </div>
  )
}
