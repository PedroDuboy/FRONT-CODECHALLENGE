import React from "react";

import "./styles.scss";

const Language = () => {
  return (
  <>
<div className="container_idioma">
  <div className="title_container_idioma">
      <h4 className="title_idioma">Idioma</h4>
      <p className="desc_idioma" >Selección el idioma en de tu cuenta.</p>
  </div>
  <div className="container_selector_idioma" >
      <div className="idioma_select_title">
          <p>Idioma</p></div>
      <div className="idioma_select">
          <h6>Español</h6>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M20.4744 6.96494C20.77 6.67468 21.2448 6.67894 21.5351 6.97445C21.8253 7.26996 21.8211 7.74481 21.5256 8.03507L12 17.3913L2.47445 8.03507C2.17894 7.74481 2.17468 7.26996 2.46494 6.97445C2.75519 6.67894 3.23004 6.67468 3.52555 6.96494L12 15.2887L20.4744 6.96494Z" fill="#A5A7AF"/>
          </svg>
        </div>
        <svg className="barra_idioma" xmlns="http://www.w3.org/2000/svg" width="479" height="1" viewBox="0 0 479 1" fill="none">
          <path d="M1 0.5H478" stroke="#A5A7AF" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="container_cambio_idioma" >
        <a href="users" className="btn btn_idioma">Cambiar idioma</a>
      </div>
</div>
  </>
  )
};

export default Language;
