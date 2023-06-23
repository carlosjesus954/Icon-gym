import React from "react";

export const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-global">
        <ul className="Footer-ul">
          <li className="Footer-li">
            <a href="#" className="Footer-link">
              Aviso legal
            </a>
          </li>
          <li className="Footer-li">
            <a href="#" className="Footer-link">
              Política de cookies
            </a>
          </li>
          <li className="Footer-li">
            <a href="#" className="Footer-link">
              Términos y condiciones
            </a>
          </li>
        </ul>
        <div className="Footer-copy">
          <span className="Footer-span">
            COPYRIGHT © 2023 | ICON GYM HECHA POR Carlos Jesus
          </span>
        </div>
      </div>
    </footer>
  );
};
