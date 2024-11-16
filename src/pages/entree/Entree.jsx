import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
// import ContacterNous from "../../components/contacterNous/ContacterNous";
import p from "../../assets/beauty-black-woman-with-short-hair-comb.jpg";
import s from "../../assets/afro-american-woman-model-studio.jpg";
import "./entree.css";
const Entree = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const check = localStorage.getItem("user");
    if (check) {
      navigate("/index");
    }
  }, []);
  const [natte, setNatte] = useState([
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
  ]);
 const loii = ()=>{
  const user= localStorage.getItem("user")
  if(!user){
    hut()
  }else{
    navigate("/index")
  }
 }
  const hut = () => {
    alert("connecter-vous");
    navigate("/signin");
  };
  return (
    <>
      <div className="hu">
        <Navbar />
        <div className="tout">
          <img src={p} alt="" className="gi" />
          <div></div>
        </div>
        <div className="services">
          <h2>Mes services</h2>
        </div>
        <div className="xi">
         {
          natte &&

          natte.map((y,key)=>{
            return(
            <div className="bax" key={key}>
            <img src={s} alt="" className="lop" />
           
            <h3>{y.des}</h3>
            <p>{y.prix}</p>

            <button onClick={hut}>reserver</button>
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
        {/* <div className="xi">
          <div className="bax">
            <img src={s} alt="" className="lop" />
            <h3>natte</h3>
            <p>4000fr</p>
            <button onClick={hut}>reserver</button>
          </div>
          <div className="bax">
            <img src={s} alt="" className="lop" />
            <h3>natte</h3>
            <p>4000fr</p>
            <button onClick={hut}>reserver</button>
          </div>
          <div className="bax">
            <img src={s} alt="" className="lop" />
            <h3>natte</h3>
            <p>4000fr</p>
            <button onClick={hut}>reserver</button>
          </div>
          <div className="bax">
            <img src={s} alt="" className="lop" />
            <h3>natte</h3>
            <p>4000fr</p>
            <button onClick={hut}>reserver</button>
          </div>
        </div> */}
        {/* <ContacterNous/>     */}
        {/* <div>
            <input type="text" />
            <label htmlFor="">reejdyucujuhbv jkj</label>
          </div> */}
        <Footer />
      </div>
    </>
  );
};

export default Entree;
