// usememo hook used to improve site performance
import React, { useMemo, useState } from 'react'

const UseMemoHook = () => {
    const [count, setCount] = useState(0);
    const [decrementValue, setdecrementValue] = useState(100);
    const increment =()=>{
        setCount(count+1); 
    }
    const decrement = ()=>{
        setdecrementValue(decrementValue-1);
    }
    
  const evenNumer =  useMemo(()=>{
        let i = 0;
        while(i<1000000000) i++ 
        return count % 2 === 0
  },[count])

  return (
    <div>
      <p>increment: {count}</p>
      <button onClick={increment} >increment <span>{evenNumer ? "Even":"odd"}</span></button>
      <button onClick={decrement} >decrement</button>
      <p>increment: {decrementValue}</p>
    </div>
  )
}

export default UseMemoHook
