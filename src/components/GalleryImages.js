import React from "react";
import { images } from "../dummyData/studentsData";

const SingleImage = ({ alt, src ,desc}) => {
  return (
    <div className="imageContainer">
      <img src={src} alt={alt} />
      <div className="description">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default function GalleryImages(props) {
  let filteredImages = images.filter((data) => data.catid.toLowerCase().includes(props.catagory.toLowerCase()) || data.desc.toLowerCase().includes(props.catagory.toLowerCase()));
  
  return (
    <>
    <h3 className="galleryTitle"> {filteredImages.length === 0 ? <p className="imageNotFound">No image found</p>:props.catagory + " "+ "Pictures"
    }</h3>
    <div className="imgMain">
     
      {filteredImages.map((image) => (
        <SingleImage {...image} key={image.id} />
      ))} 
    </div>
    </>
  );
}
