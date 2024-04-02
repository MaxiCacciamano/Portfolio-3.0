import React from "react";
import profile from "../../IMG/IMG_20221122_094256774_HDR.jpg";
import "./Home.css";
import { Skills } from "../Skills/Skills";
import { Proyects } from "../Proyec/Proyects";
import { Allproyects } from "../Proyects/Allproyects";
import { Contact } from "../Contact/Contact";
import { Form } from "../Form/Form";
import { Footer } from "../Footer/Footer.jsx";
import NavBar from '../NavBar/NavBar.jsx';
import { ButtonCv } from "../Botones/ButtonCv";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <div className="contect-width">
      <NavBar/>
        <div className="present">
          <div className="photo">
            <img src={profile} alt="Not found" />
          </div>
          <div className="resum">
            <h1 className="title">
              <span>Nice to meet you!</span>
            </h1>
            <h1 className="title1">I'm Maxi Cacciamano.</h1>
            <div className="line1"></div>
            {/* <p>
          <span>DESARROLLADOR FULLSTACK CON ORIENTACION FRONTEND</span>
        </p> */}
            <p className="description">
            "Advanced student of Systems and Fullstack web developer with a focus on Frontend.<br/> 
            I am a frontend developer passionate about crafting web
             applications that users adore."
            </p>
            <div className="resume">
            <ButtonCv />
          </div>
            <div className="line"></div>
          </div>
        </div>
        <div>
          <Skills />
        </div>
        <div>
          <Allproyects />
        </div>
      </div>
      <div className="contacto">
        <Contact />
      </div>
      <div className="contect-width" id="form">
        <div className="form">
          <Form />
        </div>
      </div>
        <div className="footer">
        <Footer/>
        </div>
    </div>
  );
};
