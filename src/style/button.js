import { Component } from 'react';
import styled,{css, keyframes,createGlobalStyle} from 'styled-components';

 const rotate = keyframes`
   from{
     transform:rotate(0deg);
   }
   to{
     transform:rotate(360deg);  
   }
 `
export const GlobalStyle = createGlobalStyle({
   body: {
    background:'red',
   }
});
export const Title = styled.button`
animation: ${rotate} 4s linear infinite;
  font-size: 2rem;
  text-align: center;
  background-color: white;
  color: black;

  /* use this type  */
  /* color: ${({primary}) => (primary ? 'white':'green')};
  background-color: ${({primary}) => (primary ? 'green':'white')}; */

  ${({primary})=> primary && css`
     background-color: red;
     border: 1px solid transparent;
     outline: none;
     font-size: 3rem;
     color: white;
      border-radius: 0.5rem;
      margin-left: 2rem;
  `}
`;
// use this code in extends css Component
export const Bigbutton = styled(Title)`
    background-color:pink;


`;

export const Heading = styled.h1`
      font-size: 100px;
      color: ${(props)=> props.color || 'blue'};
      font-weight: 900;
      @media (max-width: 768px) {
          color: ${(props)=>props.mobileColor||"white"};
      }
      ul{
         li{
          font-size: 20px;
          color: ${(props)=>props.theme.color.textColor || 'pink'};
          
         }
      }
      div{
        background-color: red;
        width: 200px;
        height: 200px;

      }
`;

export const RereversedButton = (props)=>{
  <button {...props} children={props.children.split('').reverse()} />
}
// this code use open page new tab in browser
export const Link = styled.a.attrs({
  target:"_blank",
})`
 color:red;
`
 export const Theme = {
  color:{
    textColor:'white',
    bg:'pink',
  }
 }