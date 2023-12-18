import React from "react";
import "./StartingPage.css";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';


const imageUrl =
  process.env.PUBLIC_URL + "/bfdf5e2a4d391dd1effe9c0b5bb633be.jpg";

const landingStyle = {
  backgroundImage: `url(${imageUrl})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
  height: "100vh",
};

const textStyle = {
  position: "absolute", 
  top: "14%", 
  left: "50%", 
  transform: "translate(-50%, -50%)",
  color: "#e96767", 
  textAlign: "center", 
};

const buttonStyleA = {
    position: "absolute",
    bottom: "70%",
    fontSize: '30px',
    top: '78%',
    left: '37%',
    height: '50px'
}
const buttonStyleB = {
    position: "absolute",
    bottom: "70%",
    fontSize: '30px',
    top: '78%',
    left: '50%',
    height: '50px'
}




export default function StartingPage() {
    const navigate = useNavigate();
    const handleSignIn = (event) => {
        event.preventDefault();
        console.log('STARTING PAGE: handleSignIn initiated');
        navigate('/signin')
      };

      const handleSignUp = (event) => {
        event.preventDefault();
        console.log('STARTING PAGE: handleSignUp initiated');
        navigate('/signup')
      };


  return <div className="starting-page-body" style={landingStyle}>
    <h1 style ={textStyle} width='400px'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
    <Button variant="text" style={buttonStyleA} onClick={handleSignIn}>Log In</Button>
    <Button variant="text" style={buttonStyleB} onClick={handleSignUp}>Sign Up</Button>
  </div>;
}


