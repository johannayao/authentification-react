import "../signIn/signIn.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const [donnee, setDonnee] = useState({ email: "", password: "" });
  const [message, setMessge] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const check = localStorage.getItem("user");
    if (check) {
      navigate("/index");
    }
  }, []);

  const signIn = async () => {
    console.log(donnee);
    const request = await axios.post(
      "http://localhost:5000/api/auth/signIn",
      donnee
    );

    if (request.data.status === true) {
      console.log(request.data.token);
      
      localStorage.setItem("user", JSON.stringify(request.data.token));
      setMessge("Welcome");
      setTimeout(() => {
        navigate("/index");
      }, 2000);
    } else {
      console.log(request.data.data);
      setMessge(request.data.data);
      setTimeout(() => {
        setMessge("");
      }, 2000);
    }
  };

  return (
    <>
      <div className="container">
        <input type="checkbox" id="check" />
        <div className="login form">
          <header>Se connecter</header>
          <form action="">
            <input
              type="text"
              placeholder="Enter your email"
              onChange={(e) => setDonnee({ ...donnee, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) =>
                setDonnee({ ...donnee, password: e.target.value })
              }
            />

            <button
              className="button"
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              Connection
            </button>
            <p className="message">{message}</p>
          </form>
          <div className="signup">
            <span className="signup">
              Vous n'avez pas de compte
              <p onClick={() => navigate("/signUp")}>Créér un compte</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
