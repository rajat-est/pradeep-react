import React from 'react'
import { useRouteError } from 'react-router-dom';
const ErrorElement = () => {
    const err = useRouteError();
  return (
    <div>
        <p>error data : {err.data}</p>
        <p>error status : {err.status}</p>
        <p>error Text : {err.statusText}</p>
       
      
    </div>
  )
}

export default ErrorElement;
