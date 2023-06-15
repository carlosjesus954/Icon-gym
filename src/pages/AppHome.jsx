import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const AppHome = () => {
  const { membresias } = useContext(AuthContext);
  return (
    <>
      <section className="Section">
        <video className="Section-video" loop muted autoPlay playsInline>
          <source
            src="https://icongym.es/wp-content/uploads/2022/06/Secuencia-01_3.mp4"
            type="video/mp4"
          />
        </video>
        <div className="Section-div">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="Section-btn"
          >
            hazte socio
          </a>
        </div>
      </section>
      <section className="Membresias">
        <h1 className="Membresias-h1">nuestras membresías</h1>
        {membresias.map((ele) => (
          <div
            className="Membresias-card"
            style={{ backgroundImage: `url(${ele.background})` }}
          >
            <h3 className="Membresias-title">{ele.title}</h3>
            <div className="Membresias-container">
              <span className="Membresias-span">{ele.span}</span>
              <span className="Membresias-span">{ele.span2}</span>
              <span className="Membresias-span">{ele.span3}</span>
              <span className="Membresias-span">{ele.span4}</span>
            </div>
            <div className="Membresias-precio">
              <span className="Membresias-precio--icon">€</span>
              <span className="Membresias-precio">{ele.precio}</span>
            </div>
            <a href="#" className="Membresias-btn">
              {ele.btn}
            </a>
          </div>
        ))}
      </section>
    </>
  );
};
