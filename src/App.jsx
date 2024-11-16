import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from './pages/signIn/signIn.jsx';
import SignUp from "./pages/signUp/SignUp";
// import Index from "./pages/index/Index.Jsx";
import Index from "./pages/index/Index.jsx";
import Entree from "./pages/entree/Entree.jsx";
import Footer from "./components/footer/Footer.jsx";
import MesServices from "./components/Messervices/MesServices.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Entree />
    },
    {
      path: "/signin",
      element: <SignIn />
    },
    {
      path: "/signUp",
      element: <SignUp />
    },
    {
      path: "/index",
      element: <Index />
    },

    {
      path: "/footer",
      element: <Footer />
    },
    {
      path: "/articles",
      element: <MesServices />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
