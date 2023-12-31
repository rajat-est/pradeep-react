import React ,{useState} from "react";
// this keyword use  to get url id
// import { useParams } from "react-router-dom";
import { students } from '../dummyData/studentsData';
import { Outlet } from "react-router-dom";
import TextEditor from "./TextEditor";
import { Link, Title } from "../style/button";
import { Bigbutton } from "../style/button";
import{GlobalStyle} from "../style/button"
import { Heading ,RereversedButton} from "../style/button";

// this keyword use  to get url all details
// import { useSearchParams } from "react-router-dom";

export default function AboutUs() {
  // const {id} =useParams();
    const [Mystyle,setMystyle] = useState({
        color:'#fff',
        backgroundColor:'#000',
        transition:'all 0.3s ease-in-out'

    });
    const [mode , setmode] = useState('change blue mode');
  const changeMode = ()=>{
    if (Mystyle.backgroundColor ==='#000') {
      setMystyle({
        color:'#000',
        backgroundColor:'blue',
        transition:'all 0.3s ease-in-out'
    });
    setmode('change dark mode');
    }else{
      setMystyle({
        color:'#fff',
        backgroundColor:'#000',
        transition:'all 0.3s ease-in-out'
  
    });
    setmode('change blue mode');
    }
   
  }
  return (
    <div>
      <GlobalStyle/>
      {/* as keyword change html tag */}
        <Title as ="RereversedButton">
          click me
        </Title>
        <Title primary>
          click me
        </Title>
        <Bigbutton primary> I am Pink</Bigbutton>
        <Heading color={'#800080'}>
          i am heading
          <ul>
            <li>
              Rohit 
            </li>
            <li>
              Aman 
            </li>
            <li>
              <Link href="https://styled-components.com/docs/basics#styling-any-component">go to google</Link> 
            </li>
          </ul>
          <div></div>
        </Heading>
      {/* <p>id is : {id}</p> */}
      <Heading color="yellow" mobileColor="green">New Pradeep</Heading>
      {
        
        students.map((item)=>{
          return(
            <div key={item.id}>
              <h4>Name - {item.name}</h4>
              <p>Roll No - {item.rollNo}</p>
            </div>
          )
        })
      }
      <section>
        <h3 style={Mystyle}>
          First Content <i  className="fas fa-chevron-down"></i>
        </h3>
        <div style={Mystyle}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          tempore?
        </div>

        <h3 style={Mystyle}>
          second Content <i  className="fas fa-chevron-down"></i>
        </h3>
        <div style={Mystyle}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius dolor
          possimus perspiciatis dolorum accusamus ratione?
        </div>

        <h3 style={Mystyle}>
          Third Content <i  className="fas fa-chevron-down"></i>
        </h3>
        <div style={Mystyle}> 
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
          consectetur sint assumenda ipsa iste similique itaque sed eum
          quibusdam distinctio? <i  className="fas fa-chevron-down"></i>
        </div>
        <h3 style={Mystyle}>
          Fourth Content <i  className="fas fa-chevron-down"></i>
        </h3>
        <div style={Mystyle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          enim!
        </div>

        <h3 style={Mystyle}>
          Fifth Content <i  className="fas fa-chevron-down"></i>
        </h3>
        <div style={Mystyle}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
          distinctio maiores eos autem nobis, laboriosam minus, asperiores
          sequi, necessitatibus possimus eaque! Expedita odio rem quam!
        </div>
        <button onClick={changeMode} className="btn_mode">{mode}</button>
      </section>
      <div style={{borderWidth:"2px",padding:"10px",margin:"10px",borderColor:"black"}}>
        <p>here child comonent will render</p>
        <hr />
      
        <Outlet />
     </div>
    </div>
  );
}
