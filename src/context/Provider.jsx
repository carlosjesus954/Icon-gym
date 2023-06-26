import React from "react";
import { AuthContext } from "./AuthContext";

const nav = [
  {
    id: 1,
    title: "inicio",
    a: false,
    to: "/",
  },
  {
    id: 2,
    title: "tarifas",
    a: true,
    to: "https://deporweb.deporweb.net/altaonline/nueva.aspx?header=true&footer=true&nav=false&lang=es-ES&type=SUNPTnwxODE=",
  },
  {
    id: 3,
    title: "golden fest",
    a: false,
    to: "golden",
  },
  {
    id: 4,
    title: "contacto",
    a: false,
    to: "contact",
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
const membresias = [
  {
    id: 1,
    title: "club select",
    span: "oferta tarifa mensual",
    span2: "por tiempo limitado",
    span3: "1 mes de permanencia",
    span4: "sin matricula",
    precio: 50,
    btn: "comprar ahora",
    background: "../../public/assets/FONDO.jpg",
    big: true,
  },
  {
    id: 2,
    title: "pase de mes",
    span: "acceso al club durante 30 dias",
    precio: 60,
    btn: "comprar ahora",
    background: "../../public/assets/tarjeta-scaled.jpg",
    big: false,
  },
  {
    id: 3,
    title: "diario",
    precio: 15,
    btn: "comprar ahora",
    background: "../../public/assets/tarjeta-scaled.jpg",
    big: false,
  },
];
const ubicacion = [
  {
    id: 1,
    background: "../../public/assets/infoadicional.png",
    title: "ubicación",
    direccion: "Carrer Dr. Ventura Alabau, 1, 46910 Alfafar, Valencia",
    title2: "horario",
    span2:
      "LUNES A SÁBADO DE 06:00 a 00:00 DOMINGOS Y FESTIVOS DE 09:00 a 20:00 TODOS LOS DÍAS DEL AÑO",
    title3: "Instagram",
    span3: "icongymoficial",
  },
];
const empresas = [
  {
    id: 1,
    img: "../../public/assets/PANATTALOG63.png",
    alt: "panatia",
  },
  {
    id: 2,
    img: "../../public/assets/LogoHammer02.png",
    alt: "hammer strength",
  },
  {
    id: 3,
    img: "../../public/assets/PRIME_Logo_1200x1200-png.webp",
    alt: "prime",
  },
  {
    id: 4,
    img: "../../public/assets/300213222_389108753337570_6782189115034433375_n-150x150.png",
    alt: "nautilus",
  },
];
export const Provider = ({ children }) => {
  return (
    <AuthContext.Provider
      value={{ nav, navMid, membresias, ubicacion, empresas }}
    >
      {children}
    </AuthContext.Provider>
  );
};
