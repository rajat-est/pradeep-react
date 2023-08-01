import React, { Suspense} from "react";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
import { useState } from "react";
import { lazy } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorElement from "./ErrorElement";
import Gallery from "./Gallery";
import Todo from "./Todo";
import { ToggleProvider } from "./ToggleContext";
import TextEditor from "./TextEditor";
const LazyAboutUs = lazy(() => import("./AboutUs"));

export default function Route() {
  const [searchData, setSearchData] = useState("kncjlsabcas");
  const Applayout = () => {
    return (
      <>
        <Navbar setSearchData = {setSearchData} searchData = {searchData}  />
        <Outlet />
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout/>,
      errorElement: <ErrorElement />,
      children: [
        {
          path: "",
          element:<TextEditor/>
          // element: <TextForm title="Enter your text below" mode={mode} />,
        },
        {
          path: "gallery",
          element: <Gallery  searchData={searchData}/>,
        },
        {
          path: "todo",
          element:<Todo/>,
        },
        {
          path: "about",
          element: (
            <Suspense fallback={<p>Loading....</p>}>
              <LazyAboutUs />
            </Suspense>
          ),
          children: [{ path: "pradeep", element: <p>this is about pradeep</p> },{path:"abc",element:<p>this is about abc</p>, 
        },{path:"indore",element:<p>this is about indore</p>, 
    }],
        },
      ],
    },
  ]);

  return( 
    <ToggleProvider> <RouterProvider router={router} /></ToggleProvider>
 );
}
