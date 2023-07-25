import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { GoldenShow } from "../components/GoldenShow";

export const GoldenFest = () => {
  const { goldenFest, setGoldenShow, goldenShow, selectedId, setSelectedId } =
    useContext(AuthContext);

  const onSelectImg = (id, img) => {
    setSelectedId(id);

    setGoldenShow(!goldenShow);
  };
  return (
    <section className="Golden">
      <div className="Golden-global wrapper">
        <h2 className="Golden-h2 animate__animated animate__backInLeft">
          golden fest
        </h2>
        <div className="Golden-div">
          {goldenFest.map((ele) => (
            <div
              className="Golden-cards animate__animated animate__zoomIn"
              key={ele.id}
            >
              <img
                src={ele.img}
                alt="IconGym Imagen"
                className="Golden-img"
                onClick={() => onSelectImg(ele.id, ele.img)}
              />
            </div>
          ))}
        </div>
        <GoldenShow />
      </div>
    </section>
  );
};
