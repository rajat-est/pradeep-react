import { styled } from "styled-components";

export const FormInput = styled.input`
  width: ${(props) => props.width || "100%"};
  padding: 10px 5px;
  outline: none;
  box-shadow: 0px 0px 4px 0px #ddd;
  margin: 10px 0;
  border: 1px solid transparent;
  border-radius: 10px;
`;
export const ButtonSubmit = styled.input`
  width: ${(props) => props.width || "100%"};
  padding: 10px 5px;
  outline: none;
  box-shadow: 0px 0px 4px 0px #ddd;
  margin: 10px 0;
  border: 1px solid #ee6f37;
  border-radius: 10px;
  background-color:${(props) => props.bg || '#fff'} ;
  cursor: pointer;
  &:hover{
   background-color: #ee6f37;
   color: #fff;
   transition:all 0.3s ease-in-out;
  }
`;
