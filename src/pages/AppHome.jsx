import React from "react";

export const AppHome = () => {
  return (
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
  );
};
