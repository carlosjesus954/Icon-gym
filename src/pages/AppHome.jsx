import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "animate.css";

export const AppHome = () => {
  const { membresias, ubicacion, empresas } = useContext(AuthContext);
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
        <div className="Membresias-background--color">
          <div className="wrapper">
            <h2 className="Membresias-h2">nuestras membresías</h2>

            <div className="Membresias-global">
              {membresias.map((ele) => (
                <div
                  className={`Membresias-card animate__backInLeft ${
                    ele.big ? "Membresias-card--big" : ""
                  }`}
                  style={{ backgroundImage: `url(${ele.background})` }}
                >
                  <h3
                    className={`Membresias-title ${
                      ele.big ? "Membresias-title--big" : ""
                    }`}
                  >
                    {ele.title}
                  </h3>
                  <div className="Membresias-container">
                    <span
                      className={`Membresias-span ${
                        ele.big ? "Membresias-span--big" : ""
                      }`}
                    >
                      {ele.span}
                    </span>
                    <span
                      className={`Membresias-span ${
                        ele.big ? "Membresias-span--big" : ""
                      }`}
                    >
                      {ele.span2}
                    </span>
                    <span
                      className={`Membresias-span ${
                        ele.big ? "Membresias-span--big" : ""
                      }`}
                    >
                      {ele.span3}
                    </span>
                    <span
                      className={`Membresias-span ${
                        ele.big ? "Membresias-span--big" : ""
                      }`}
                    >
                      {ele.span4}
                    </span>
                  </div>
                  <div className="Membresias-precio">
                    <span
                      className={`Membresias-precio--icon ${
                        ele.big ? "Membresias-precio--iconBlack" : ""
                      }`}
                    >
                      €
                    </span>
                    <span
                      className={`Membresias-dinero ${
                        ele.big ? "Membresias-dinero--big" : ""
                      }`}
                    >
                      {ele.precio}
                    </span>
                  </div>
                  <a
                    href="#"
                    className={`Membresias-btn ${
                      ele.big ? "Membresias-btn--big" : ""
                    }`}
                  >
                    {ele.btn}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {ubicacion.map((ele) => (
        <section
          className="Ubicacion"
          key={ele.id}
          style={{ backgroundImage: `url(${ele.background})` }}
        >
          <div className="Ubicacion-global">
            <div className="Ubicacion-global--mod wrapper">
              <div className="Ubicacion-cards">
                <h2 h2 className="Ubicacion-h2">
                  {" "}
                  {ele.title}{" "}
                </h2>
                <div className="Ubicacion-cards--subcontainer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="Ubicacion-icon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                  <span className="Ubicacion-span">{ele.direccion}</span>
                </div>
              </div>
              <div className="Ubicacion-cards">
                <h2 h2 className="Ubicacion-h2">
                  {" "}
                  {ele.title2}{" "}
                </h2>
                <div className="Ubicacion-cards--subcontainer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="Ubicacion-icon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                  </svg>
                  <span className="Ubicacion-span">{ele.span2}</span>
                </div>
              </div>
              <div className="Ubicacion-cards">
                <h2 h2 className="Ubicacion-h2">
                  {" "}
                  {ele.title3}{" "}
                </h2>
                <div className="Ubicacion-cards--subcontainer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="Ubicacion-icon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Ubicacion-span"
                  >
                    {ele.span3}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
      <section className="Empresas ">
        <div className="Empresas-global wrapper">
          {empresas.map((ele) => (
            <img src={ele.img} alt={ele.alt} className="Empresas-img" />
          ))}
        </div>
      </section>
    </>
  );
};
