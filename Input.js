import React, { Component } from 'react'
// import Icons from "./Icons.js"

function Input (props) {
  let classes;
  let placeholder;
  let iconClasses;
  if (props.error) {
    classes = `${classes} error`
  }
  if (props.fullwidth) {
    classes = `${classes} ${props.fullwidth}`
  }
  if (props.multiline) {
    classes = `${classes} multiline row4`
  }
  if (props.size) {
    classes = `${classes} ${props.size}`
  }

  placeholder = props.value ? props.value : "Placeholder", 
  placeholder = props.fullwidth ? "Text" : placeholder;

  if (props.startIcon) {
    iconClasses = `${iconClasses} ${props.startIcon} left`
  }
  if (props.endIcon) {
    iconClasses = `${iconClasses} ${props.endIcon} right`
  }

  return (
    <div className="wrapper">
      <i className={`fa ${iconClasses}`}></i>
      <input 
        type= "text"
        className={classes}
        placeholder={placeholder}
        disabled={props.disabled}
      />
      <span>
        {props.helperText && props.helperText}
      </span>
      <label htmlFor={props.label}>{props.label}</label>
    </div>
  )
}

export default Input;