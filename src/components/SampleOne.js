import React from 'react'
import HOC from "./HOC"

const SampleOne = (props) => {
   
  return (
    <div>
      <button onClick={props.handleClick} >{props.count}</button> 
    </div>
  )
}

export default HOC(SampleOne);
