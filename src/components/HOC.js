import React, { useState } from "react";

const HOC = (Component) => {
   
   function NewComponent () {
    const [count, setCount] = useState(5);
    const handleClick = () => {
      setCount(count + 1);
    }
    return <Component count={count} handleClick={handleClick} />;
  };
;
  return NewComponent
};

export default HOC;
