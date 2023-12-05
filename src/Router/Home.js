import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from "@mui/material";

const Home = () => {
    const navigate=useNavigate();

    const handlel=()=>{
      navigate("/layout")
    }
    const handleb=()=>{
        navigate("/blog")
      }
      const handlec=()=>{
        navigate("/contact")
      }

  return (
    <div>
    <Button onClick={handlel}>Layout</Button>
    <Button onClick={handleb}>Blog</Button>
    <Button onClick={handlec}>Contact</Button>
    </div>
  )
}

export default Home;