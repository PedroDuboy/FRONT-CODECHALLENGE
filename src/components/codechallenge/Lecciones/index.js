import React from "react";
import InfiniteScroll from "components/molecules/InfiniteScroll";
import './styles.scss';
const Lecciones = () => {
  
  return (<>

    <div>
      <h2 className="perfil-title">Clases ripio-Academy</h2>
      <p className="perfil-desc">Desde acá podés enterarte de tus clases.</p>
    </div>
    <div className="container_lecciones_InfiniteScroll"> 
      <div className="container_lecciones_back">
          <div><h2>Registro de Clases</h2></div>
        <InfiniteScroll />
      </div>  
    </div>
    </>
  );
};

export default Lecciones;
