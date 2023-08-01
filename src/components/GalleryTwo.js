import React from "react";
import {
  ButtonTag,
  Hadding,
  ImageWrapper,
  ImgContainer,
  Main,
} from "../style/GalleryStyle";
import { GalleryTwoData } from "../dummyData/studentsData";

function GalleryTwo(props) {
  let fillterCatagoryTwo = GalleryTwoData;
  if (props.catagoryTwo != "all" || props.searchData) {
     fillterCatagoryTwo = GalleryTwoData.filter((value)=>{
     return( value.catid.toLowerCase() === props.catagoryTwo.toLowerCase() || value.imgName.toLowerCase() === props.searchData.toLowerCase() )
   });
  }
  return(
    <>
    <Hadding fontSize="50px">{fillterCatagoryTwo.length === 0  ?<span className="errors">NO IMAGE FOUND</span>:props.catagoryTwo + " Images" }</Hadding>
      <ImageWrapper>
        {fillterCatagoryTwo.map((value) => {
          return (
            <Main key={value.id}>
              <ImgContainer>
                <img src={value.src} alt={value.alt} />
              </ImgContainer>
              <div className="descriptionImg">
                <p className="imgName">{value.imgName}</p>
                <ButtonTag>{value.tag}</ButtonTag>
              </div>
            </Main>
          );
        })}
      </ImageWrapper>
    </>
  );
}

export default GalleryTwo;
