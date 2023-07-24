import { Route, useLoaderData, Link } from "react-router-dom"

export default function Careers() {
  const carrers = useLoaderData();
  return(
    <>
      {
       carrers.map(Career=>(
        <Link to={'/'} key={Career.id}>
          <p>{Career.body}</p>
          <p>{Career.body}</p>
        </Link>
       )) 
      }
    </>
  )   
}
// loader function 
const careersLoader = async () => {

}
// json-server -p 4000 -w ./data/db.json

export const loaderFun = async()=>{
   const res = fetch('http://localhost:10000/comments');
   return res.join();
}
