import React, { useEffect, useState } from "react";
import {
  ButtonTag,
  Hadding,
  ImageWrapper,
  ImgContainer,
  Main,
  ButtonTab,
} from "../style/GalleryStyle";
import { useGlobalContext } from "./AppContext";
import { GalleryTwoData, GalleryTwoTab } from "../dummyData/studentsData";
const Buttons = (props) => {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        {GalleryTwoTab.map((value) => {
          return (
            <ButtonTab
              key={value.id}
              color={props.catagoryTwo === value.catid.toLowerCase() ? "#fff" : ""}
              onClick={() => props.setCatagoryTwo(value.catid.toLowerCase())}
            >
              {value.btnName}
            </ButtonTab>
          );
        })}
      </div>
    </div>
  );
};
function GalleryTwo(props) {
  const { searchData } = useGlobalContext();
  const [catagoryTwo, setCatagoryTwo] = useState(GalleryTwoTab[0]["catid"]);
  const [data, setData] = useState(GalleryTwoData);
  useEffect(() => {
    let filteredData = GalleryTwoData;
    if (catagoryTwo !== "all") {
      filteredData = filteredData.filter((value) =>
        value.catid.toLowerCase().includes(catagoryTwo)
      );
    }

    if (searchData !== "") {
      filteredData = filteredData.filter((value) =>
        value.imgName.toLowerCase().includes(searchData)
      );
    }

    setData(filteredData);
  }, [catagoryTwo, searchData]);

  return (
    <>
      <div className="galleryTwo">
        <Buttons setCatagoryTwo={setCatagoryTwo} catagoryTwo={catagoryTwo} />
        <Hadding fontSize="50px">
          {data.length === 0 ? (
            <span className="errors">NO IMAGE FOUND</span>
          ) : (
            catagoryTwo + " Images"
          )}
        </Hadding>
        <ImageWrapper>
          {data.map((value) => {
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
      </div>
    </>
  );
}

export default GalleryTwo;
