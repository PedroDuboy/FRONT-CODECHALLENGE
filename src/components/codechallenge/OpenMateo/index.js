import React, { useEffect, useState } from 'react';
import fetch from 'node-fetch';
import "./styles.scss";

const OpenMateo = () => {
  const [temperaturaMaxima, setTemperaturaMaxima] = useState(null);
  const [temperaturaMinima, setTemperaturaMinima] = useState(null);
  const [diaActual, setDiaActual] = useState(null);
  const [horaActual, setHoraActual] = useState(null);

  useEffect(() => {
    const obtenerDatosMeteorologicos = async () => {
      try {
        const response = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=-34.6131&longitude=-58.3772&daily=temperature_2m_max,temperature_2m_min'
        );
        const data = await response.json();
        //Maxima Minima 
        setTemperaturaMaxima(data.daily.temperature_2m_max[0]);
        setTemperaturaMinima(data.daily.temperature_2m_min[0]);
        
        //dia actual
        const fechaActual = new Date();
        const dia = fechaActual.getDate();
        const mes = fechaActual.getMonth() + 1; 
        const anio = fechaActual.getFullYear();
        setDiaActual(`${anio}-${mes < 10 ? '0' + mes : mes}-${dia < 10 ? '0' + dia : dia}`);

        // hora actual
        const hora = fechaActual.getHours();
        const minutos = fechaActual.getMinutes();
        const segundos = fechaActual.getSeconds();
        setHoraActual(`${hora < 10 ? '0' + hora : hora}:${minutos < 10 ? '0' + minutos : minutos}:${segundos < 10 ? '0' + segundos : segundos}`);
      } catch (error) {
        console.error('Error al obtener la informacion meteorológica:', error);
      }
    };

    obtenerDatosMeteorologicos();
  }, []);

  return (
    <div>
      <div >
        <h2 className="perfil-title">Información Meteorológica</h2>
       <p className="perfil-desc">Desde acá podés enterarte de la temperaturea de tu país.</p>
      </div>
      <div className="container-meteo">
        <h3>Zona horaria de Buenos Aires (GMT-3)</h3>
        <div className='container-mateo-informacion'>
        <div>
        {diaActual && <h4>Día actual: <p className='info_mateo'>{diaActual}</p></h4>}
        {horaActual && <h4>Hora actual:<p className='info_mateo'>  {horaActual}</p></h4>}
        </div>
        <div>
        {temperaturaMaxima && <h4>Temperatura máxima:<p className='info_mateo'> {temperaturaMaxima}°C</p></h4>}
        {temperaturaMinima && <h4>Temperatura mínima: <p className='info_mateo'>{temperaturaMinima}°C</p></h4>}
        </div>
        </div>
      </div>
    </div>
  );
};

export default OpenMateo;
