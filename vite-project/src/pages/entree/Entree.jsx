
import {useEffect } from "react";
import {useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./entree.css"
const Entree = () => {
  const navigate= useNavigate()         
  useEffect(() => {
    const check = localStorage.getItem("user");
    if (check) {
      navigate("/index")
    }
  }, []);


  return (
    <>
      <div>
        <Navbar />
         {/* <ContacterNous/>  */}
        <Footer/> 
      </div>
    </>
  );
};

export default Entree;
