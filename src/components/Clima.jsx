import React from "react";
import '../css/clima.css'

const Clima = ({ nombre, temperatura, descripcion, imagenUrl }) => {
  return (
    <section className="p-3">
      {nombre && temperatura && descripcion && imagenUrl ? (
        <article className="text-center p-2">
          <div><img className="w-25" src={imagenUrl} alt="" /></div>
          <div className="temperatura"><p >Temperatura: {temperatura}°C </p></div>
          <div className="temperatura"><p >Descripcion: {descripcion} </p></div>
          <div id="ciudad">{nombre}</div>
        </article>
      ) : (
     
        <div className="text-warning text-center "> <p>No se han recibido datos!!</p> </div>
       
      )}
    </section>
  );
};

export default Clima;