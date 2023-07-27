import React, { useState, useRef } from "react";
import lowercase from "../img/lowercase.png"
import uppercase from "../img/uppercase.png"
const TextEditor = () => {
  const [heading, setHeading] = useState("h4");
  const [color, setColor] = useState("black");
  const [text, setText] = useState("");
  const [italic, setItalic] = useState(false);
  const [bold, setBlod] = useState(false);
  const [copy, setCopy] = useState(false);
  const [align, setAlign] = useState();

  const [history, setHistory] = useState([text]);
  const historyIndexRef = useRef(0);
  const textRef = useRef(null);
  const handleOnchange = (e) => {
    const newText = e.target.value;
    setText(newText);
    setHistory([...history.slice(0, historyIndexRef.current + 1), newText]);
    historyIndexRef.current++;
  };

  const handleRedo = () => {
    if (historyIndexRef.current < history.length - 1) {
      historyIndexRef.current++;
      setText(history[historyIndexRef.current]);
    }
  };
  const handleUndo = () => {
    if (historyIndexRef.current > 0) {
      historyIndexRef.current--;
      setText(history[historyIndexRef.current]);
    }
  };
 // copy text Function
  const handleCopy = () => {
   if(!copy){
    let textSelect = textRef.current;
      textSelect.select();
      console.log(textSelect);
      navigator.clipboard.writeText(textSelect.value);
      setCopy(true);
   }else if (copy){
    navigator.clipboard.writeText("");
    setCopy(false);
   }  
  };
  // download Function
  const handleDownloadClick = () => {
   const file = new Blob([text], { type: 'text/plain' });
   const downloadLink = document.createElement('a');
   downloadLink.href = URL.createObjectURL(file);
   downloadLink.download = 'my_text_file.txt';
   downloadLink.click();
   URL.revokeObjectURL(downloadLink.href);
  };
  // Uppercase Function
  const convertUppercase = () => {
    let newtextup = text.toUpperCase();
    setText(newtextup);
  };
  // LowerCase function
  const convertLowerCase = () => {
    let newtextup = text.toLowerCase();
    setText(newtextup);
  };
    // Remove Space function
  const handlespace = () => {
    let newtexts = text.split(/[ ]+/);
    setText(newtexts.join(" "));
  };
  
  return (
    <>
      <div className="textEditorContainer">
        <h1 className="title">
          Rich <span>Text Editor</span>
        </h1>
        <div className="textEditor">
          <div className="menuTextEditor">
            <ul>
              <li>
                <button onClick={handleUndo}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5 6.25H4.88438L7.12625 4.00875L6.25 3.125L2.5 6.875L6.25 10.625L7.12625 9.74062L4.88625 7.5H12.5C13.4946 7.5 14.4484 7.89509 15.1517 8.59835C15.8549 9.30161 16.25 10.2554 16.25 11.25C16.25 12.2446 15.8549 13.1984 15.1517 13.9017C14.4484 14.6049 13.4946 15 12.5 15H7.5V16.25H12.5C13.8261 16.25 15.0979 15.7232 16.0355 14.7855C16.9732 13.8479 17.5 12.5761 17.5 11.25C17.5 9.92392 16.9732 8.65215 16.0355 7.71447C15.0979 6.77678 13.8261 6.25 12.5 6.25Z"
                      fill="#212529"
                    />
                  </svg>
                </button>
                <button onClick={handleRedo}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 6.25H15.1156L12.8737 4.00875L13.75 3.125L17.5 6.875L13.75 10.625L12.8737 9.74062L15.1137 7.5H7.5C6.50544 7.5 5.55161 7.89509 4.84835 8.59835C4.14509 9.30161 3.75 10.2554 3.75 11.25C3.75 12.2446 4.14509 13.1984 4.84835 13.9017C5.55161 14.6049 6.50544 15 7.5 15H12.5V16.25H7.5C6.17392 16.25 4.90215 15.7232 3.96447 14.7855C3.02678 13.8479 2.5 12.5761 2.5 11.25C2.5 9.92392 3.02678 8.65215 3.96447 7.71447C4.90215 6.77678 6.17392 6.25 7.5 6.25Z"
                      fill="#212529"
                    />
                  </svg>
                </button>
              </li>
              <li>
                <select
                  name="selectBox"
                  id=""
                  onChange={(e) => setHeading(e.target.value)}
                >
                  <option value="h1" className="h1">
                    heading 1
                  </option>
                  <option value="h2" className="h2">
                    heading 2
                  </option>
                  <option value="h3" className="h3">
                    heading 3
                  </option>
                  <option value="h4" className="h4">
                    heading 4
                  </option>
                  <option value="h5" className="h5">
                    heading 5
                  </option>
                  <option value="h6" className="h6">
                    heading 6
                  </option>
                </select>
              </li>
              <li>
                <select
                  name="selectBox"
                  id=""
                  className={color}
                  onChange={(e) => setColor(e.target.value)}
                >
                  <option value="blue" className="blue">
                    blue
                  </option>
                  <option value="red" className="red">
                    red
                  </option>
                  <option value="green" className="green">
                    green
                  </option>
                  <option value="black" className="black">
                    black
                  </option>
                  <option value="orange" className="orange">
                    orange
                  </option>
                  <option value="darkblue" className="darkblue">
                    darkblue
                  </option>
                </select>
              </li>
              <li>
                <button
                  onClick={() => setItalic(!italic)}
                  className={italic ? "active" : ""}
                >
                  <i class="fa-solid fa-italic"></i>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setBlod(!bold)}
                  className={bold ? "active" : ""}
                >
                  <i class="fa-solid fa-bold"></i>
                </button>
              </li>
              <li>
                <button onClick={handleCopy} className={copy ? "active" : ""}>
                  <i class="fa-solid fa-copy"></i>
                </button>
              </li>
              <li>
                <button onClick={handleDownloadClick}><i class="fa-solid fa-download"></i></button>
              </li>
              <li>
                <button onClick={convertUppercase} ><img src={uppercase} style={{
                  width:'20px'
                }} alt="uppercase" /></button>
              </li>
              <li>
                <button onClick={convertLowerCase} ><img src={lowercase} style={{
                  width:'30px'
                }} alt="uppercase" /></button>
              </li>
              <li>
                <button className={align==='left'? 'active':"" } onClick={()=>setAlign('left')}><i class="fa-solid fa-align-left"></i></button>
              </li>
              <li>
                <button className={align==='right'? 'active':"" } onClick={()=>setAlign('right')}><i class="fa-solid fa-align-right"></i></button>
              </li>
              <li><button className={align==='justify'? 'active':"" } onClick={()=>setAlign('justify')}><i class="fa-solid fa-align-justify"></i></button></li>
              <li><button className={align==='center'? 'active':"" } onClick={()=>setAlign('center')}><i class="fa-solid fa-align-center"></i></button></li>
              <li><button onClick={handlespace}><i class="fa-solid fa-shuttle-space"></i></button></li>
              <li><button onClick={()=> setText("")}><i class="fa-solid fa-trash"></i></button></li>
            </ul>
          </div>
          <div className="bodyTextEditor">
            <textarea
              name=""
              id="textareaInput"
              value={text}
              className={`${heading} ${color} ${italic ? "italic" : ""} ${
                bold ? "bold" : ""} ${align==='left'? 'left':"" || align==='right'? 'right':"" || align==='center'? 'center':"" || align==='justify'? 'justify':"" }`}
              placeholder="Enter Your Text Here"
              onChange={handleOnchange}
              ref={textRef}
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextEditor;
