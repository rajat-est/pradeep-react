import React, { useState } from "react";
import { tabButons } from "../dummyData/studentsData";
import GalleryImages from "./GalleryImages";
export default function Gallery() {
  const [catagory, setCatagory] = useState(tabButons[0]["catid"]);

  const [searchbtn, setSearchbtn] = useState("");
  const selectCategory = (catagory) => {
    setCatagory(catagory);
  };
  const handleSearch = (searchValue) => {
    if (searchValue.target.value !== "") {
      setCatagory(searchValue.target.value);
      setSearchbtn(searchValue.target.value);
    } else {
      setCatagory(tabButons[0]["catid"]);
      setSearchbtn(searchValue.target.value);
    }
  };
  return (
    <>
      <div className="containerGallery">
        <h1>SnapShort</h1>
        <div className="searchContainer">
          <input
            type="text"
            className="inputSearch"
            id="search"
            placeholder="Search..."
            value={searchbtn}
            onChange={handleSearch}
          />
          <span>
            {searchbtn === "" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width={"20px"}
              >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
            ) : 
              <button onClick={()=>{
                setSearchbtn("");
                setCatagory(tabButons[0]["catid"]);
              }
            }>&#x274C;</button>
            }
          </span>
        </div>
        <div className="btnContainer">
          {tabButons.map((button) => {
            return (
              <button
                key={button.id}
                className={`btnTab ${
                  catagory.toLowerCase() === button.catid.toLowerCase()
                    ? "btnActive"
                    : ""
                }`}
                onClick={() => selectCategory(button.catid)}
              >
                {button.btnName}
              </button>
            );
          })}
        </div>
        <GalleryImages catagory={catagory} />
      </div>      
    </>
  );
}
