import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from '../../components/navbar/Navbar';
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
        </>
    );
};

export default Index;