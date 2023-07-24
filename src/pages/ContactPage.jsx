import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useForm } from "../hook/useForm";

export const ContactPage = () => {
  const { contact } = useContext(AuthContext);
  const initialForm = {
    nombre: "",
    telefono: "",
    email: "",
    mensaje: "",
  };
  const validateForm = (form) => {
    let errors = {};
    const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    const regexTelefonoMovil = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;

    if (!form.nombre.trim()) {
      errors.nombre = "Es requirido este campo";
    } else if (!regexName.test(form.nombre.trim())) {
      errors.nombre = "Este nombre no es valido";
    }
    if (!form.telefono.trim()) {
      errors.telefono = "Es requirido este campo";
    } else if (!regexTelefonoMovil.test(form.telefono.trim())) {
      errors.telefono = "Este teléfono no es valido";
    }
    if (!form.email.trim()) {
      errors.email = "Es requirido este campo";
    } else if (!regexEmail.test(form.email.trim())) {
      errors.email = "Este correo no es valido";
    }
    if (!form.mensaje.trim()) {
      errors.mensaje = "Es requirido este campo";
    }

    return errors;
  };
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validateForm);

  return (
    <section className="Contact">
      <div className="Contact-global ">
        <article className="Contact-article wrapper">
          <div className="Contact-info">
            <h2 className="Contact-h2">ponte en contacto</h2>
            <h3 className="Contact-h3">contacto</h3>
            <span className="Contact-span">
              Rellena este formulario y te contestaremos en la mayor brevedad
              posible.
            </span>
          </div>
          <form action="#" className="Contact-form" onSubmit={handleSubmit}>
            {contact.map((ele) => (
              <>
                <input
                  key={ele.id}
                  type={ele.input}
                  className="Contact-input"
                  name={ele.name}
                  pattern={ele.patern}
                  placeholder={ele.placeHolder}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form[ele.name]}
                  required
                />
                {errors[ele.name] && (
                  <p className="Contact-error">{errors[ele.name]}</p>
                )}
              </>
            ))}
            <textarea
              name="mensaje"
              cols="10"
              rows="2"
              placeholder="Mensaje"
              className="Contact-input Contact-input--textarea"
              onChange={handleChange}
              onBlur={handleBlur}
              value={form.mensaje}
              required
            ></textarea>
            {/* {errors[name] && <p className="Contact-error">{errors[name]}</p>} */}
            <button type="submit" className="Contact-button">
              Enviar
            </button>
          </form>
          <div className="Contact-div">
            <div className="Contact-info">
              <h2 className="Contact-h2">información de contacto</h2>
              <h3 className="Contact-h3">pregúntanos</h3>
              <span className="Contact-span">
                Si quieres contactarnos por otras vías, abajo encontrarás otras
                formas de contacto.
              </span>
            </div>
            <div className="Contact-div Contact-div--icons">
              <div className="Contact-card">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="currentColor"
                  className="Contact-icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
                <a
                  href="https://www.google.com/maps/place/Carrer+Dr.+Ventura+Alabau,+1,+46910+Alfafar,+València/@39.4174752,-0.3904873,15z/data=!4m13!1m7!3m6!1s0xd604eb12050c28f:0xe1a1223e4bf9561c!2sCarrer+Dr.+Ventura+Alabau,+1,+46910+Alfafar,+València!3b1!8m2!3d39.4174752!4d-0.3817326!3m4!1s0xd604eb12050c28f:0xe1a1223e4bf9561c!8m2!3d39.4174752!4d-0.3817326"
                  className="Contact-a"
                >
                  Carrer Dr. Ventura Alabau, 1, 46910 Alfafar, Valencia
                </a>
              </div>
              <div className="Contact-card">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="currentColor"
                  className="Contact-icon"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>
                <a href="tel:+34%20633%2061%2088%2077%20" className="Contact-a">
                  +34 633 61 88 77
                </a>
              </div>
              <div className="Contact-card">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="currentColor"
                  className="Contact-icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                </svg>
                <a href="https://icongym.es" className="Contact-a">
                  icongym.es
                </a>
              </div>
              <div className="Contact-card">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="currentColor"
                  className="Contact-icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
                <a
                  href="https://www.instagram.com/icongymoficial/"
                  className="Contact-a"
                >
                  icongymoficial
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
