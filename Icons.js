import React, { Component } from 'react'
import AtSymbol from "./icons/AtSymbol.svg"
import Cog from "./icons/Cog.svg"
import Search from "./icons/Search.svg"
import Selector from "./icons/Selector.svg"
import Server from "./icons/Server.svg"

function Icons (props) {
  let icon;
  switch (props.name ) {
    case "AtSymbol":
      icon = <img src={AtSymbol}/>;
      break;
    default :
    icon = ""
  }
  return icon;
}

export default Icons
