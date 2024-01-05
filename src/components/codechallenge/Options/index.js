import React from "react";

import "./styles.scss";

const Options = () => {
  return (
    <>
      <div className="container_options">
        <div className="options_conf">
          <div className="title_desc_options">
            <h6>Autenticación de dos factores</h6>
            <p>
              Además de tu contraseña, te pediremos un código de seguridad para
              confirmar que sos vos quien inicia sesión.
            </p>
          
          </div>
          <div className="containerBtn_options">
            <div className="container_btn_options">
              <a href="users" className="btn btn_options">
                Configurar
              </a>
              
            </div>
          </div>
          
        </div>
        <div className="container_barra_optionpas"> 
        <div className="barra_optionpas"></div>
        </div>
        <div className="options_conf">
          <div className="title_desc_options">
            <h6>Mails de seguridad</h6>
            <p>
              Podés habilitar esta opción para recibir un mail de seguridad cada
              vez que ingresás a tu cuenta.
            </p>
          </div>
          <div className="containerBtn_options">
            <div className="container_btn_options">
              <a href="users" className="btn btn_options">
                Habilitar
              </a>
            </div>
          </div>
        </div>
        <div className="container_barra_optionpas"> 
        <div className="barra_optionpas"></div>
        </div>
        <div className="options_conf">
          <div className="title_desc_options">
            <h6>Código anti-phishing</h6>
            <p>
              Prevení intentos de fraude generando un código único, que se
              incluirá en todos los mails que recibas de Ripio.
            </p>
          
          </div>
          <span className="jo_options">jo**</span>
          <div className="containerBtn_options">
            <div className="container_btn_options">
              <a href="users" className="btn btn_options_Modificar">
                Modificar
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Options;
