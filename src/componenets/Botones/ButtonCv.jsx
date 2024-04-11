import React from "react";
import ReactTooltip from "react-tooltip";
import CV from "../../assets/CV/CV-Maxi-C.pdf";
import dow from "../../IMG/download_FILL0_wght400_GRAD0_opsz48.png";
import "./Button.css";

export const ButtonCv = () => {
    return (
        <div className="buttons">
            <button className="boton" data-tip data-for="botonsobre">
                <a href={CV} download="CV-MaxiC">
                    <span className="shadow"></span>
                    <span className="edge"></span>
                    <span className="front text">
                        {" "}
                        <p className="Resume">Resume</p>
                        <img src={dow} />{" "}
                    </span>
                </a>
            </button>
            <ReactTooltip id="botonsobre">
                para saber de mi historial academico, descarga mi cv
            </ReactTooltip>
        </div>
    );
};
