import React from "react";
import { AuthContext } from "./AuthContext";

const nav = [
  {
    id: 1,
    title: "inicio",
  },
  {
    id: 2,
    title: "tarifas",
  },
  {
    id: 3,
    title: "fotos mayo",
  },
  {
    id: 4,
    title: "contacto",
  },
];
const navMid = [
  {
    id: 1,
    title: "Horario",
    span: "LU - DO: 06:00 - 00:00",
    info: "Todos los días del año",
    info2: "El horario puede variar los festivos",

    title2: "Visítanos",
    span2: "Dirección:",
    info3: "Carrer Dr. Ventura Alabau",
    info4: "1, 46910 Alfafar, Valencia",

    btn: "Llévame",
    href: "https://www.google.com/maps/place/ICON+Gym,+Carrer+Dr.+Ventura+Alabau,+1,+46910+Alfafar,+Valencia/@39.4174752,-0.3817326,15z/data=!4m6!3m5!1s0xd604fcf611fd6c7:0x8a7e91ef5e7e8709!8m2!3d39.4174782!4d-0.3817471!16s%2Fg%2F11sy6xc615",
  },
];

export const Provider = ({ children }) => {
  return (
    <AuthContext.Provider value={{ nav, navMid }}>
      {children}
    </AuthContext.Provider>
  );
};