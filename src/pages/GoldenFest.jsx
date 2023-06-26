import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const GoldenFest = () => {
  const { goldenFest } = useContext(AuthContext);
  return (
    <section className="Golden">
      <div className="Golden-global wrapper">
        <h2 className="Golden-h2">golden fest</h2>
        <div className="Golden-div">
          {goldenFest.map((ele) => (
            <div
              className="Golden-cards animate__animated animate__fadeInUp"
              key={ele.id}
            >
              <img src={ele.img} alt="IconGym Imagen" className="Golden-img" />
            </div>
          ))}
        </div>
        <div className="Golden-show">
          <div className="Golden-btns">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="Golden-btn"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
