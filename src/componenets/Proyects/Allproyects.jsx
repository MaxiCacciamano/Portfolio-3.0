import React from "react";
import { Proyectos } from "./Proyects.jsx";
import "./proyectodemo.css";

export const Allproyects = () => {
  return (
    <div className="proyectos-container">
        <h1 className="title">Proyects.</h1>
      <div id="card_container1">
        <Proyectos />
      </div>
    </div>
  );
};
