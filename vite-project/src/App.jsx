import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./pages/signIn/signIn";
import SignUp from "./pages/signUp/SignUp";
// import Index from "./pages/index/Index.Jsx";
import Index from "./pages/index/Index.jsx"
import Entree from "./pages/entree/Entree.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/signin",
      element: <SignIn/>
    },
    {
      path: "/signUp",
      element: <SignUp/>
    },
     {
      path:"/index",
      element: <Index/>
     },
     {
      path:"/",
      element: <Entree/>
     },
     {
      path:"/footer",
      element: <Footer/>
     },
  ])
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
