import React ,{useState} from "react";
import { Outlet } from "react-router-dom";
const TextForm=(props)=> {
  const [text, setText] = useState('');
  let wordCount = 0;
  let latterCount = text.length;
    const convertUppercase = ()=>{
      let  newtextup = text.toUpperCase();
        setText(newtextup);
    }
    const convertLowerCase = ()=>{
        let  newtextup = text.toLowerCase(); 
        setText(newtextup);

    }
    const Textchange = (e)=>{
        setText(e.target.value);
    }
    const clearText = ()=>{
      setText('');
    }
    // count condition 
    if (text === "") {
      wordCount = 0;
    } else {
      wordCount =  text.trim().split(/\s+/).length
    }
    // download Function 
    const handleDownloadClick = () => {
      const element = document.createElement('a');
      const file = new Blob([text], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = 'text.txt';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    };
  const  handleCopy = ()=>{
      let text  = document.getElementById("textarea");//
      text.select();
      navigator.clipboard.writeText(text.value);

  }
  const handlespace = ()=>{
    let newtexts = text.split(/[ ]+/);
    setText(newtexts.join(" "));

  }
  
  
  return ( 
    <div className="container">
    <div className={`form_textarea ${props.mode === 'light'?'grey':'white'}`}>
        <label htmlFor="textarea">{props.title}</label>
        <textarea name="" id="textarea"  rows="20" className={`textarea ${props.mode === 'light'?'grey':'white'}`} value={text} onChange={Textchange}></textarea>
        <button onClick={convertUppercase}>Convert to Uppercase</button>
        <button onClick={convertLowerCase}>Convert to Uppercase</button>
        <button onClick={clearText}>Clear</button>
        <button onClick={handleDownloadClick}>Download</button>
        <button onClick={handleCopy}>Copy text</button>
        <button onClick={handlespace}>Remove space</button>


      </div>
      <div className="coventcount">
        
           <p className={`${props.mode === 'light'?'grey':'white'}`}>total words {wordCount} total latters {latterCount}</p>
           <p className={`${props.mode === 'light'?'grey':'white'}`}> total time to read this Pragraph {(0.008 * text.split(" ").length)}</p>
      </div>
      <Outlet />
    </div>
  );
}

export default TextForm;