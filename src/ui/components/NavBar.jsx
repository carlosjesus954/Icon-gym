import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

export const NavBar = () => {
  const { nav, navMid, menu, setMenu } = useContext(AuthContext);
  const [menuActivo, setMenuActivo] = useState({
    1: true,
    2: false,
    3: false,
    4: false,
  });
  const onHandleMenu = () => {
    setMenu(!menu);
  };
  return (
    <header className="Header">
      <div className="Header-global">
        <div className="Header-container">
          <svg
            data-name="Capa 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 501.62 118.93"
            className="Header-icon"
          >
            <rect x="0.5" y="4.05" width="16.49" height="111.22" />
            <polygon points="391.37 114.64 391.37 1.09 484.94 81.97 484.94 3.63 501.12 3.63 501.12 117.83 408.5 36.93 408.5 114.64 391.37 114.64" />
            <path
              d="M304.5,351.41c-32.85,0-59.58-26.24-59.58-58.51s26.73-58.5,59.58-58.5a59.7,59.7,0,0,1,42.38,17.38L335.6,263.13a43.78,43.78,0,0,0-31.1-12.73c-24,0-43.58,19.07-43.58,42.5s19.55,42.51,43.58,42.51a44.06,44.06,0,0,0,33-14.7l12,10.62A60.09,60.09,0,0,1,304.5,351.41Z"
              transform="translate(-168.73 -233.33)"
            />
            <path
              d="M489.24,269.79a41.45,41.45,0,0,1,7,23c0,23.44-19.55,42.51-43.58,42.51a44.05,44.05,0,0,1-27.35-9.45L413.1,336.52a60,60,0,0,0,39.52,14.78c32.85,0,59.58-26.25,59.58-58.51a57.45,57.45,0,0,0-10.85-33.61Z"
              transform="translate(-168.73 -233.33)"
            />
            <path
              d="M414.75,313.79a41.5,41.5,0,0,1-5.71-21c0-23.44,19.55-42.51,43.58-42.51a44.09,44.09,0,0,1,25.44,8l12.29-10.77a60,60,0,0,0-37.73-13.26c-32.85,0-59.58,26.25-59.58,58.51a57.38,57.38,0,0,0,9.53,31.68Z"
              transform="translate(-168.73 -233.33)"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="Header-icon--menu"
            viewBox="0 0 16 16"
            onClick={() => onHandleMenu()}
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
        <nav className={`Header-nav Nav ${menu ? "Nav--show" : ""}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="Nav-icon--close"
            viewBox="0 0 16 16"
            onClick={() => onHandleMenu()}
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
          <ul className="Nav-ul">
            {nav.map((ele) => (
              <li className="Nav-li" key={ele.id}>
                {ele.a ? (
                  <a href={ele.to} className="Nav-link--menu">
                    {ele.title}
                  </a>
                ) : (
                  <NavLink to={ele.to} className="Nav-link--menu">
                    {ele.title}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
          {navMid.map((ele) => (
            <div className="Nav-subcontainer" key={ele.id}>
              <div className="Nav-info">
                <span className="Nav-span">{ele.title}</span>
                <span className="Nav-span">{ele.span}</span>
                <span className="Nav-span">{ele.info}</span>
                <span className="Nav-span">{ele.info2}</span>
              </div>
              <div className="Nav-info">
                <span className="Nav-span Nav-span--title">{ele.title2}</span>
                <span className="Nav-span">{ele.span2}</span>
                <span className="Nav-span">{ele.info3}</span>
                <span className="Nav-span">{ele.info4}</span>
                <a
                  href={ele.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="Nav-link"
                >
                  {ele.btn}
                </a>
              </div>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};
