import React, { Suspense } from "react";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
import { useState } from "react";
import { lazy } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorElement from "./ErrorElement";
import Gallery from "./Gallery";
const LazyAboutUs = lazy(() => import("./AboutUs"));

export default function Route() {
  const [mode, setmode] = useState("light");

  const Applayout = () => {
    return (
      <>
        <Navbar mode={mode} />
        <Outlet />
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
      errorElement: <ErrorElement />,
      children: [
        {
          path: "",
          element: <TextForm title="Enter your text below" mode={mode} />,
        },
        {
          path: "gallery",
          element: <Gallery/>,
        },
        {
          path: "about",
          element: (
            <Suspense fallback={<p>Loading....</p>}>
              {" "}
              <LazyAboutUs />{" "}
            </Suspense>
          ),
          children: [{ path: "pradeep", element: <p>this is about pradeep</p> },{path:"abc",element:<p>this is about abc</p>, 
        },{path:"indore",element:<p>this is about indore</p>, 
    }],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
