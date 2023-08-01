import React, { useContext, useEffect, useRef,useState } from "react";
import { ToggleContext } from "./ToggleContext";

const ToggleButton = () => {
  const countRef = useRef(1);
  const refP = useRef(null);
  const { isToggled, toggle } = useContext(ToggleContext);
  // const [count,setCount] = useState(5);
  // function changeColor(){
   
  //   refP.current.style.color ="red";
  //   if(refP.current.style.color === "green"){
  //     refP.current.style.color = "yellow";
  //   }else{
  //     refP.current.style.color ="green";
  //   }
  // }
  // function increaseCount(){
  //   countRef.current = countRef.current+1;
  //   console.log(countRef.current);
  // }
 
 
  return (
    <>
      <button onClick={toggle} className={isToggled ? "light" : "dark"}>
        {isToggled ? "Light Mode" : "Dark Mode"}
      </button>
      {/* <p ref={refP}>use ref example</p>
      <button onClick={changeColor}>change color</button>
      <p>{countRef.current}</p>
      <button onClick={increaseCount}>increase count</button>
      <p>count from use state: {count}</p>
      <button onClick={()=>setCount(prev=>prev+2)}>increase count useState</button> */}
    </>
  );
};

export default ToggleButton;
