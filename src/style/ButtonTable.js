import { styled } from "styled-components";

export const TableBtn = styled.button`
  padding:  10px 8px;
  background-color: ${(props)=> props.bg || 'red'};
  border: 1px solid ${(props)=> props.border || 'transparent'};
  outline: none;
  font-size: 16px;
  font-weight: bold;
  color:  ${(props)=> props.textColor || '#fff'};
  border-radius: 5px;
  cursor: pointer;
`