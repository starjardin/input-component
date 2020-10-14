import React, { Component } from 'react'
import Input from "./Input.js"
import "./input_style.scss"

export default function App () {
  return (
    <div>
      <div className="container">
        <div>
          {` < input />`}
          <Input 
            label="Label"
          />
        </div>
        <div>
          {` &:hover`}
          <Input 
            label="Label"
          />
        </div>
        <div>
          {`&:active // &:focus`}
          <Input 
            label="Label"
          />
        </div>
      </div>
      <div className="container">
        <div>
        {`< input error />`}
          <Input 
            error
            label="Label"
          />
        </div>
        <div>
        {` &:hover`}
          <Input 
            error
            label="Label"
          />
        </div>
        <div>
        {`&:active // &:focus`}
          <Input 
            error
            label="Label"
          />
        </div>
      </div>
      <div className="container">
        <div>
          {`< input disabled />`}
          <Input disabled/>
        </div>
      </div>
      <div className="container">
        <div>
          {`< input helperText="some interesting text" text="error" />`}
          <Input 
            label="Label"
            helperText="some interesting text"
            text="text"
          />
        </div>
        <div>
          {`< input helperText="some interesting text" text="error" />`}
          <Input 
            label="Label"
            helperText="some interesting text"
            error
            text="error"
          />
        </div>
      </div>
      <div className="container">
        <div>

          {`< input fa-twitter />`}
          <Input
            label="label" 
            startIcon="fa-twitter"
          />
        </div>
        <div>
          {`< input fa-search />`}
          <Input
            label="label" 
            startIcon="fa-search"
          />
        </div>
        <div>
          {`< input fa-key />`}
          <Input
            label="label" 
            startIcon="fa-key"
          />
        </div>
        <div>
          {`< input fa-cog />`}
          <Input
            label="label" 
            endIcon="fa-cog"
          />
        </div>
        <div>
          {`< input fa-trash-o />`}
          <Input
            label="label" 
            endIcon="fa-trash-o"
          />
        </div>
        <div>
          {`< input fa-shopping-cart />`}
          <Input
            label="label" 
            endIcon="fa-shopping-cart"
          />
        </div>
      </div>
      <div className="container">
        <div>
          {`< input value="text" />`}
          <Input 
            value="Text"
            label="Label"
          />
        </div>
      </div>
      <div className="container">
        <div>
          {`< input size="sm" />`}
          <Input
            size="sm"
          />
        </div>
        <div>
          {`< input size="md" />`}
          <Input
            size="md"
          />
        </div>
        <div>
          {`< input size="lg" />`}
          <Input
            size="lg"
          />
        </div>
      </div>
      <div className="container">
        <div>
          {`< input fullwidth />`}
          <Input 
            label="label"
            fullwidth="fullwidth"
          />
        </div>
      </div>
      <div>
        {`<Input multiline row="4"/>`}
        <div>
          <textarea></textarea>
        </div>
      </div>
    </div>
  )
}
