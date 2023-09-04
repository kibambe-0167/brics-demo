import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import bg from "./assets/WhatsApp Image 2023-09-02 at 12.54.15 PM.jpeg";
//
import "./index.css";
import { useNavigate } from "react-router-dom";
function Login() {
  const [formData, setFormData] = useState({});
  var navigate=useNavigate()
  const handleSubmit = () => {
    alert(JSON.stringify(formData));
  };

  return (
    <>
      <img className="bg" src={bg} />
      <h4 style={{ color: "black", fontSize: 25 }}>Login</h4>



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
        Sign In
      </Button>

      <Button onClick={() => navigate("/sign-up")} className="btn">
        Sign up
      </Button>
    </>
  );
}

export default Login;

// todo
// array
// #fe724c
