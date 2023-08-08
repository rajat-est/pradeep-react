import { styled } from "styled-components";
  
 export const Heading = styled.h1`
   font-size: ${(props)=> props.fontSize || ""};
   color: ${(props)=> props.color || "#000"};
   text-align:${(props)=> props.align || "center"} ;
   text-transform: uppercase;
   margin: ${(props)=> props.m || "2rem 0"};
 `
export const ButtonTab = styled.button`
   background-color: ${(props)=> props.color || '#000'};
    color: ${(props)=> props.color ? '#000':'#fff'};
    border: 2px solid  ${(props)=> props.color ?'#000' : 'transparent'};
    margin: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
`
export const ImageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
   background-color: #F5F5F5;
   padding: 89px 112px 64px 115px;
   @media (max-width: 991px) {
    padding: 50px;

   }
   @media (max-width: 767px) {
    padding: 20px;

   }
  .descriptionImg{
     padding: 22.69px;
  }
`;

export const ImgContainer = styled.div`
 width: ${(props) => (props.width ? props.width : "100%")};
 height: ${(props) => (props.height ? props.height : "200px")};
 img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 7.564px 7.564px 0 0;
  }
`;
export const  Main = styled.div `
   width: ${(props) => (props.width ? props.width : "calc(33.33% - 14px)")};
   background-color: #fff;
   border-radius: 7.564px;

   @media (max-width:767px) {
     width:calc(50% - 14px) ;
   }
   @media (max-width:360px) {
     width:100% ;
   }
 `;

export const ButtonTag = styled.button `
   border-radius: ${(props) => (props.radius ? props.radius:  '5.673px')};
   background-color: ${(props) => (props.bg || '#F5F5F5' )} ;
   padding: 7.564px;
   border: 1px solid transparent;
   margin-top: 12.29px;
   cursor:pointer;
 `;