import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import bg from "./assets/WhatsApp Image 2023-09-02 at 12.54.15 PM.jpeg";
//
import "./index.css";
import { useNavigate } from "react-router-dom";
function Signup() {
  const [formData, setFormData] = useState({});

  const handleSubmit = () => {
    alert(JSON.stringify(formData));
  };
  var navigate=useNavigate()

  return (
    <>
      <img className="bg" src={bg} />
      <h4 style={{ color: "black", fontSize: 25 }}>Sign Up</h4>


   
      {/* email */}
      <TextField
        type="email"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="inp"
        label="Full name"
        style={{ width: "100%" }}
      />

      {/* email */}
      <TextField
        type="email"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="inp"
        label="Email"
        style={{ width: "100%" }}
      />

      {/* pwd */}
      <TextField
        type="password"
        onChange={(e) => setFormData({ ...formData, pwd: e.target.value })}
        className="inp"
        label="Password"
        style={{ width: "100%" }}
      />
      <Button onClick={() => handleSubmit()} className="btn">
        SIGN UP
      </Button>

      <Button onClick={() => navigate("/")} className="btn">
        Sign In
      </Button>
    </>
  );
}

export default Signup;

// todo
// array
// #fe724c
