import React from "react";


import "./styles.scss";

const Profile = () => {

  
  return (
  
<div className="container">
  <div className="container-perfil">
    <h2 className="perfil-title">Perfil</h2>
    <p className="perfil-desc">Desde acá podés configurar las preferencias de tu cuenta de Ripio.</p>


<div className="container_perfil_options">
    <div className="options_containers">
        <div className="ajustes_perfil_option">Ajustes de perfil</div>
    </div>
    <div className="options_containers">
        <div className="preferencias">Preferencias</div>
        <div className="preferencias_opctions"></div>
    </div>
    <div className="options_containers">
        <div className="pago">Métodos de pago</div>
    </div>
    <div className="options_containers">
        <div className="limites">Límites</div>
    </div>
</div>
</div>
  </div>
  )
};

export default Profile;
