import React, { useState } from "react";
import p from "../../assets/beauty-black-woman-with-short-hair-comb.jpg";
import s from "../../assets/afro-american-woman-model-studio.jpg";
import "./mesServices.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
const MesServices = () => {
  const [natte,setNatte] = useState([
    {
      des: "natte",
      prix: "4000f"
    },
    {
      des: "natte",
      prix: "4000f"
    },
    {
      des: "natte",
      prix: "4000f"
    },
    {
      des: "natte",
      prix: "4000f"
    }
  ])
 
  return (
    <>
    <Navbar/>
      <div className="xi">
         {
          natte &&

          natte.map((y,key)=>{
            return(
            <div className="bax" key={key}>
            <img src={s} alt="" className="lop" />
           
            <h3>{y.des}</h3>
            <p>{y.prix}</p>

            <button>reserver</button>
          </div>)
          })
         }
          {/* <div className="bax">
            <img src={s} alt="" className="lop" />
            <h3>natte</h3>
            <p>4000fr</p>
            <button onClick={hut}>reserver</button>
          </div> */}
          {/* <div className="bax">
            <img src={s} alt="" className="lop" />
            <h3>natte</h3>
            <p>4000fr</p>
            <button onClick={hut}>reserver</button>
          </div> */}
          {/* <div className="bax">
            <img src={s} alt="" className="lop" />
            <h3>natte</h3>
            <p>4000fr</p>
            <button onClick={hut}>reserver</button>
          </div> */}
        </div>
        <Footer/>
    </>
  );
};

export default MesServices;
