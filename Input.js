import React, { Component } from 'react'
import Icon from "./Icons.js"

function Input (props) {
  let classes;
  let placeholder;
  if (props.error) {
    classes = `${classes} error`
  }
  if (props.fullwidth) {
    classes = `${classes} ${props.fullwidth}`
  }
  if (props.multiline) {
    classes = `${classes} multiline row4`
  }

  placeholder = props.value ? props.value : "Placeholder", 
  placeholder = props.fullwidth ? "Text" : placeholder;

  return (
    <div className="wrapper">
      <span className={props.text && props.text}>
        {props.helperText && props.helperText}
      </span>
      <input 
        type= "text"
        className={classes}
        placeholder={placeholder}
        disabled={props.disabled}
      />
      <label htmlFor={props.label}>{props.label}</label>
    </div>
  )
}

export default Input;