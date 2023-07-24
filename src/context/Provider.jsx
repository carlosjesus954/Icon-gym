import React, { useState } from "react";
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
const goldenFest = [
  {
    id: 1,
    img: "../../public/assets/icon1img.jpeg",
    paisage: true,
  },
  {
    id: 2,
    img: "../../public/assets/icon2img.jpeg",
    paisage: false,
  },
  {
    id: 3,
    img: "../../public/assets/icon3img.jpeg",
    paisage: false,
  },
  {
    id: 4,
    img: "../../public/assets/icon4img.jpeg",
    paisage: false,
  },
  {
    id: 5,
    img: "../../public/assets/icon5img.jpeg",
    paisage: true,
  },
  {
    id: 6,
    img: "../../public/assets/icon6img.jpeg",
    paisage: false,
  },
  {
    id: 7,
    img: "../../public/assets/icon7img.jpeg",
    paisage: false,
  },
  {
    id: 8,
    img: "../../public/assets/icon8img.jpeg",
    paisage: false,
  },
  {
    id: 9,
    img: "../../public/assets/icon9img.jpeg",
    paisage: true,
  },
  {
    id: 10,
    img: "../../public/assets/icon10img.jpeg",
    paisage: true,
  },
  {
    id: 11,
    img: "../../public/assets/icon11img.jpeg",
    paisage: false,
  },
  {
    id: 12,
    img: "../../public/assets/icon12img.jpeg",
    paisage: false,
  },
  {
    id: 13,
    img: "../../public/assets/icon13img.jpeg",
    paisage: true,
  },
  {
    id: 14,
    img: "../../public/assets/icon14img.jpeg",
    paisage: false,
  },
  {
    id: 15,
    img: "../../public/assets/icon15img.jpeg",
    paisage: false,
  },
  {
    id: 16,
    img: "../../public/assets/icon16img.jpeg",
    paisage: false,
  },
  {
    id: 17,
    img: "../../public/assets/icon17img.jpeg",
    paisage: false,
  },
  {
    id: 18,
    img: "../../public/assets/icon18img.jpeg",
    paisage: false,
  },
  {
    id: 19,
    img: "../../public/assets/icon19img.jpeg",
    paisage: false,
  },
  {
    id: 20,
    img: "../../public/assets/icon20img.jpeg",
    paisage: false,
  },
  {
    id: 21,
    img: "../../public/assets/icon21img.jpeg",
    paisage: false,
  },
  {
    id: 22,
    img: "../../public/assets/icon22img.jpeg",
    paisage: false,
  },
  {
    id: 23,
    img: "../../public/assets/icon23img.jpeg",
    paisage: false,
  },
  {
    id: 24,
    img: "../../public/assets/icon24img.jpeg",
    paisage: false,
  },
  {
    id: 25,
    img: "../../public/assets/icon25img.jpeg",
    paisage: false,
  },
  {
    id: 26,
    img: "../../public/assets/icon26img.jpeg",
    paisage: false,
  },
  {
    id: 27,
    img: "../../public/assets/icon27img.jpeg",
    paisage: false,
  },
  {
    id: 28,
    img: "../../public/assets/icon28img.jpeg",
    paisage: false,
  },
  {
    id: 29,
    img: "../../public/assets/icon29img.jpeg",
    paisage: false,
  },
  {
    id: 30,
    img: "../../public/assets/icon30img.jpeg",
    paisage: false,
  },
  {
    id: 31,
    img: "../../public/assets/icon31img.jpeg",
    paisage: false,
  },
  {
    id: 32,
    img: "../../public/assets/icon32img.jpeg",
    paisage: false,
  },
  {
    id: 33,
    img: "../../public/assets/icon33img.jpeg",
    paisage: false,
  },
  {
    id: 34,
    img: "../../public/assets/icon34img.jpeg",
    paisage: true,
  },
  {
    id: 35,
    img: "../../public/assets/icon35img.jpeg",
    paisage: false,
  },
  {
    id: 36,
    img: "../../public/assets/icon36img.jpeg",
    paisage: false,
  },
  {
    id: 37,
    img: "../../public/assets/icon37img.jpeg",
    paisage: true,
  },
  {
    id: 38,
    img: "../../public/assets/icon38img.jpeg",
    paisage: false,
  },
  {
    id: 39,
    img: "../../public/assets/icon39img.jpeg",
    paisage: true,
  },
  {
    id: 40,
    img: "../../public/assets/icon40img.jpeg",
    paisage: true,
  },
];
const contact = [
  {
    id: 1,
    placeHolder: "Nombre",
    input: "text",
    patern: null,
    name: "nombre",
  },
  {
    id: 2,
    placeHolder: "Teléffono",
    input: "text",
    patern: "[0-9()#&+*-=.]+",
    name: "telefono",
  },
  {
    id: 3,
    placeHolder: "email",
    input: "email",
    patern: null,
    name: "email",
  },
];
export const Provider = ({ children }) => {
  const [goldenShow, setGoldenShow] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [menu, setMenu] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        nav,
        navMid,
        membresias,
        ubicacion,
        empresas,
        goldenFest,
        goldenShow,
        setGoldenShow,
        selectedId,
        setSelectedId,
        contact,
        menu,
        setMenu,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
