import React, { useState, useEffect } from "react";
import "../signIn/signIn.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  useEffect(() => {
    const check = localStorage.getItem("user");
    if (check) {
      navigate("/signUp");
    }
  }, []);

  const [donnee, setDonnee] = useState({
    nom: "",
    email: "",
    password: "",
    tel: "",
    prenom: ""
  });

  
  const [message, setMessge] = useState("");
  const navigate = useNavigate();

  const signUp = async () => {
    try {
      console.log(donnee);

    const request = await axios.post(
      "http://localhost:5000/api/auth/signUp",
      donnee
    );

    console.log(request.data);
    if (request.data.status === true) {
      setMessge("Account created successfully");
      setTimeout(() => {
        navigate("/signIn");
      }, 2000);
    } else {
      setMessge(request.data.message);
      setTimeout(() => {
        setMessge("");
      }, 3000);
    }
    } catch (error) {
      console.log(error);
      
    }
  };

  return (
    <>
      <div className="container">
        <input type="checkbox" id="check" />
        <div className="login form">
          <header>Inscription</header>
          <form action="">
            <input
              type="text"
              placeholder="Entrer votre nom"
              onChange={(e) => setDonnee({ ...donnee, nom: e.target.value })}
            />
            <input
              type="text"
              placeholder="Entrer votre Prenom"
              onChange={(e) => setDonnee({ ...donnee, prenom: e.target.value })}
            />
            <input
              type="number"
              placeholder="Entrer votre numéro de télephone"
              onChange={(e) => setDonnee({ ...donnee, tel: e.target.value })}
            />
            <input
              type="email"
              placeholder="Entrer votre email"
              onChange={(e) => setDonnee({ ...donnee, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Entrer votre mot de pass"
              onChange={(e) =>
                setDonnee({ ...donnee, password: e.target.value })
              }
            />
            <button
              className="button"
              onClick={(e) => {
                e.preventDefault();
                signUp();
              }}
            >
              S'inscrire
            </button>
            <p className="message">{message}</p>
          </form>
          <div className="signup">
            <span className="signup">
              vous avez dejà un compte?
              <p onClick={() => navigate("/signin")}> Connecter vous</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
