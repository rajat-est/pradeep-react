import React from "react";
import { Search, SearchContainer } from "../style/Search";
import { useGlobalContext } from "./AppContext";
function SearchComponent() {
  const { searchData, setSearchData } = useGlobalContext();
  return (
    <>
      <SearchContainer>
        <Search key="search-123" padding={'10px 35px 10px 5px '} autoFocus="autoFocus"  placeholder="Search..." value={searchData}  onChange={(e)=>setSearchData(e.target.value)}></Search>
        {searchData === "" ? (
          <i className="fa-solid fa-magnifying-glass"></i>
        ) : (
          <i className="fa-regular fa-circle-xmark errors " onClick={()=> setSearchData('')}></i>
        )}
      </SearchContainer>
    </>
  );
}

export default SearchComponent;
