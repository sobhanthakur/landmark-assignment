import React from "react";
import ModelForm from "./ModelForm";

const Register = () => {
  const images = ["abc", "pqr"];

  return (
    <div className="container mt-5">  
      <ModelForm images={images}></ModelForm>
    </div>
  );
};

export default Register;
