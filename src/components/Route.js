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
import GalleryTwo from "./GalleryTwo";
import { AppProvider } from "./AppContext";
import RegistrationFrom from "./RegistrationFrom";
import RegistrationData from "./RegistrationData";
import RegistrationFormik from "./RegistrationFormik";
import UpdateForm from "./UpdateForm";
import Login from "./Login";
import Protected ,{PublicRoute} from "./Protected";
import SignUp from "./SignUp";
const LazyAboutUs = lazy(() => import("./AboutUs"));
export default function Route() {
  const Applayout = () => {
    return (
      <>
        <Navbar />
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
          element:<Protected><RegistrationFormik /></Protected>,
        },
        {
          path: "gallery",
          element:<Protected><Gallery/></Protected> ,
        },
        {
          path: "galleryTwo",
          element:<Protected><GalleryTwo/></Protected>,
          // element:<GalleryTwo catagoryTwo = {catagoryTwo} searchData={searchData}/>
        },
        {
          path: "table",
          element: <Protected><RegistrationData/></Protected>,
        },
        {
          path: "UpdateForm/:id",
          element:<Protected><UpdateForm /></Protected> ,
        },
        {
          path: "login",
          element: <PublicRoute><Login /></PublicRoute> ,
        },
        {
          path: "signUp",
          element:<PublicRoute><SignUp /></PublicRoute> ,
        },
        {
          path: "form",
          element: <RegistrationFrom />,
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
