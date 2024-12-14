import React, { useEffect } from "react";
import './main_page.css'; 
import { useNavigate } from 'react-router-dom';

export const MainPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
          navigate('/select');
        }, 3000);
    
        return () => clearTimeout(timer);
      }, [navigate]);

    return(
        <div className="main_page">
            <p className="main_title">Hello World...</p>
        </div>
    );
}
