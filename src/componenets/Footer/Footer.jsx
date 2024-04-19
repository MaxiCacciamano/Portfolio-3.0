import React from 'react'
import copy from "../../IMG/Copyright.png";
import escuadra from "../../IMG/urobos .png";
import "./footer.css";

export const Footer = () => {
  return (
    <div className='footer2'>
        <div className='copyright'>
          <h4>
          2023
          <img className="c" src={copy} />
          All right reserved
        </h4>
       </div>
       <div className='merkers'>
        <span>
          <h4>Created by ❤ Maxi</h4>
        </span>
       </div>
         <div className="footer-contacto">
           <img src={escuadra} />
         </div>
    </div>
  )
}
