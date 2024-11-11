import React, { useEffect, useState } from "react";
import "./navbar.css";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [verify, setVerify] = useState(false);
  const [buttonDeconnecte, setbuttonDeconnecte] = useState(false);
  const [recupNom, setRecupNom] = useState("");

  useEffect(() => {
    const checks = JSON.parse(localStorage.getItem("user"));

    if (!checks) {
      setVerify(true);
    } else {
      setVerify(false);
    }
  }, [verify]);

  useEffect(() => {
    const vi = JSON.parse(localStorage.getItem("user"));
    if (!vi) {
      setbuttonDeconnecte(false);
    } else {
      setbuttonDeconnecte(true);
    }
  }, [buttonDeconnecte]);

  const getUser = async () => {
    try {
      const request = await axios.get(
        "http://localhost:5000/api/auth/nom",

        {
          headers: { Authorization: JSON.parse(localStorage.getItem("user")) }
        }
      );
      const nom = request.data.data.nom;

      if (request.data.status) {
        setRecupNom(nom);
      } else {
        setRecupNom("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUser();
    console.log(recupNom);
  }, []);

  const navigate = useNavigate();
  const deconnection = () => {
    if (localStorage.getItem("user")) {
      localStorage.removeItem("user");
      navigate("/signin");
    } else {
      navigate("/index");
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-containers containers">
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>

          <ul className="menu-items">
            {/* <li><a href="#">Home</a></li> */}
            <NavLink to="/" className="active">
              Accueil
            </NavLink>
            <Link to="/">contacter-nous</Link>
            <Link>About</Link>
            <Link>About</Link>
            {buttonDeconnecte === true ? (
              <button
                className="buttonDeconnecter"
                onClick={() => deconnection()}
              >
                Deconnecter
              </button>
            ) : (
              ""
            )}

            <p className="affiche">{recupNom && recupNom} </p>
            {verify === true ? (
              <Link to="/signin">
                <button>Se connecter</button>
              </Link>
            ) : (
              ""
            )}
          </ul>

          <h1 className="logo">Navbar</h1>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
