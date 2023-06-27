import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const GoldenShow = () => {
  const { goldenShow, setGoldenShow, selectedId, setSelectedId } =
    useContext(AuthContext);

  const onCloseGolden = () => {
    setGoldenShow(!goldenShow);
  };
  const onSelectNext = () => {
    setSelectedId(selectedId + 1);
  };
  const onSelectBefore = () => {
    setSelectedId(selectedId - 1);
  };
  return (
    <div className={` Golden-show ${goldenShow ? "Golden-show--open" : ""}`}>
      <div className="Golden-btns">
        <div className="Golden-count">
          <span className="Golden-counter">{selectedId}</span>
          <span className="Golden-counter">/</span>
          <span className="Golden-counter">40</span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="Golden-btn"
          viewBox="0 0 16 16"
          onClick={() => onCloseGolden()}
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </svg>
      </div>
      <div className="Golden-box">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`Golden-btn ${
            selectedId === 1 ? "Golden-btn--hidden" : ""
          } `}
          viewBox="0 0 16 16"
          onClick={() => onSelectBefore()}
        >
          <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
        </svg>
        <img
          src={`../../public/assets/icon${selectedId}img.jpeg`}
          alt="IconGym Img"
          className={` Golden-img--selected ${
            selectedId === 1 || 5 || 9 || 10 || 13 || 34 || 37 || 39 || 40
              ? "Golden-img--modified"
              : ""
          } `}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className={`Golden-btn ${
            selectedId === 40 ? "Golden-btn--hidden" : ""
          } `}
          viewBox="0 0 16 16"
          onClick={() => onSelectNext()}
        >
          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
        </svg>
      </div>
    </div>
  );
};
