import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import bg from "./assets/WhatsApp Image 2023-09-02 at 12.54.15 PM.jpeg";
//
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Login from "./login";
import Signup from "./signup";
import MyTabs from "./Tabs";
function App() {
  const [formData, setFormData] = useState({});

  const handleSubmit = () => {
    alert(JSON.stringify(formData));
  };

  return (
    <Routes>
      <Route path="/" element={<MyTabs />} />
      {/* <Route path="/" element={<Login />} /> */}
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/dash" element={<Signup />} />
    </Routes>
  );
}

export default App;

// todo
// array
// #fe724c
