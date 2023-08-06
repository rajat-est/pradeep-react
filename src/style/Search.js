import { styled } from "styled-components";

export const Search = styled.input`
  background-color: ${(props)=> props.color || '#ffff'};
  border: 1px solid ${(props)=> props.borderColor || '#000'};
  padding: ${(props) => (props.pad ? props.pad : "10px 5px")};
  height: fit-content;
  border-radius: 10px;
  outline: none;
`
export const SearchContainer = styled.div`
 position: relative;
 i{
    position: absolute;
    top: 10px;
    right: 15px;
 }
`