import React,{useState} from "react";
import {
  ButtonTag,
  Hadding,
  ImageWrapper,
  ImgContainer,
  Main,
  ButtonTab
} from "../style/GalleryStyle"
import { useGlobalContext } from "./AppContext";
import { GalleryTwoData,GalleryTwoTab } from "../dummyData/studentsData";
const Buttons = (props) => {
  return (
    <div>
 <div style={{
        textAlign:"center",
        marginTop:'3rem'
      }}>
         {GalleryTwoTab.map((value)=>{
          return(
           <ButtonTab key={value.id}  color= {props.catagoryTwo === value.catid ? "#fff":""}  onClick={()=>props.setCatagoryTwo(value.catid)} >{value.btnName}</ButtonTab>
          );
         })}
      </div>
    </div>
  )
}
function GalleryTwo(props) {
  const {searchData } = useGlobalContext()
  console.log(searchData);
  const [catagoryTwo, setCatagoryTwo] = useState(GalleryTwoTab[0]["catid"]);
  const filterCatagoryTwo = catagoryTwo !=='all' || searchData
  ? GalleryTwoData.filter((value) => {
      return (
        value.catid.toLowerCase() === catagoryTwo.toLowerCase() || value.imgName.toLowerCase() === searchData.toLowerCase()
      );
    })
  : GalleryTwoData;
  return (
    <>
     <Buttons setCatagoryTwo = {setCatagoryTwo} catagoryTwo={catagoryTwo} />
      <Hadding fontSize="50px">
        {filterCatagoryTwo.length === 0 ? (
          <span className="errors">NO IMAGE FOUND</span>
        ) : (
          catagoryTwo + " Images"
        )}
      </Hadding>
      <ImageWrapper>
        {filterCatagoryTwo.map((value) => {
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
