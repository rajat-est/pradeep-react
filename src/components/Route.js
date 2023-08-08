import React, { Suspense } from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import { lazy } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorElement from "./ErrorElement";
import Gallery from "./Gallery";
import Todo from "./Todo";
import { ToggleProvider } from "./ToggleContext";
import TextEditor from "./TextEditor";
import Footer from "./Footer";
import  GalleryTwo  from "./GalleryTwo";
import { AppProvider } from "./AppContext";
import RegistrationFrom from "./RegistrationFrom";
import RagistrationData from "./RagistrationData";
import RegistrationFormik from "./RegistrationFormik";
const LazyAboutUs = lazy(() => import("./AboutUs"));
export default function Route() {
  const Applayout = () => {
    return (
      <>
        <Navbar/>
        <Outlet />
        <Footer />
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
          element: <TextEditor />,
          // element: <TextForm title="Enter your text below" mode={mode} />,
        },
        {
          path: "formik",
          element: <RegistrationFormik/>,
        },
        {
          path: "gallery",
          element: <Gallery/>,
        },
        {
          path: "galleryTwo",
          element:<GalleryTwo/>
          // element:<GalleryTwo catagoryTwo = {catagoryTwo} searchData={searchData}/>
          ,
        },
        {
          path: "table",
          element:<RagistrationData/>
          ,
        },
        {
          path: "form",
          element:<RegistrationFrom/>,
          // element: (
          //   <Suspense fallback={<p>Loading....</p>}>
          //     <LazyAboutUs/>
          //   </Suspense>
          // ),
          children: [
            { path: "pradeep", element: <p>this is about pradeep</p> },
            { path: "abc", element: <p>this is about abc</p> },
            { path: "indore", element: <p>this is about indore</p> },
          ],
        },
      ],
    },
  ]);

  return (
    <ToggleProvider>
      {" "}
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </ToggleProvider>
  );
}
