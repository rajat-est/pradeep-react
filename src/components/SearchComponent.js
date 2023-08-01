import React, { useState } from "react";
import { Search, SearchContainer } from "../style/Search";

function SearchComponent(props) {
  return (
    <>
      <SearchContainer>
        <Search key={123456789} placeholder="Search..." value={props.searchData}  onChange={(e)=>props.setSearchData(e.target.value)}></Search>
        {props.searchData === "" ? (
          <i className="fa-solid fa-magnifying-glass"></i>
        ) : (
          <i className="fa-regular fa-circle-xmark error" onClick={()=> props.setSearchData('')}></i>
        )}
      </SearchContainer>
    </>
  );
}

export default SearchComponent;
