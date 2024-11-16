import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "./index.css"
import Navbar from '../../components/navbar/Navbar';
import Dashboard from '../../components/dashboard/Dashboard';
import Footer from '../../components/footer/Footer';
const Index = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const check = localStorage.getItem("user");
        if (!check) {
          navigate("/signin");
        }
      }, []);

      
    return (
        <>
            <Navbar/>


            <Dashboard/>
            <Footer/>
        </>
    );
};

export default Index;