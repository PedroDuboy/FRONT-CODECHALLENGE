import React from "react";

import "./styles.scss";

const Setting = () => {
  return (
    <>
      <div className="container_setting">
        <div className=" container_title_desc_setting">
          <h6>Configuración de notificaciones</h6>
          <p>
            Desde este lugar podés cambiar tus preferencias para recibir
            notificaciones de tus operaciones.
          </p>
        </div>
          <div className="container_options_settins">
            <p >Push</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="44" viewBox="0 0 54 44" fill="none">
            <rect y="8" width="54" height="28" rx="14" fill="#7908FF"/>
            <rect x="30" y="12" width="20" height="20" rx="10" fill="white"/>
            </svg>
          </div>
          <div className="container_options_settins">
            <p >Email</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="44" viewBox="0 0 54 44" fill="none">
            <rect y="8" width="54" height="28" rx="14" fill="#7908FF"/>
            <rect x="30" y="12" width="20" height="20" rx="10" fill="white"/>
            </svg>
          </div>
      </div>
    </>
  );
};

export default Setting;
