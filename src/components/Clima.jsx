import React from "react";
import '../css/clima.css'

const Clima = ({datosClima}) => {
 

  return (
    <section className="p-3">
      <article className=" text-center p-2">
        <div><img className="w-25" src="https://w7.pngwing.com/pngs/453/300/png-transparent-animated-sun-caricature-drawing-sun-photography-orange-computer-wallpaper-thumbnail.png" alt="" /></div>
        <div className="temperatura"><p ></p></div>
        <div className="temperatura"><p >descripcion</p></div>
        <div id="ciudad">{datosClima.name}</div>
      </article>
    </section>
  );
};

export default Clima;
