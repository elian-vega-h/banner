import React from "react";
import "./styles.css";
import imagenReact from "../src/imagen/react.png";
import imagenFondo from "../src/imagen/datos.jpg";

export default function App() {
  return (
    <div className="banner" style={{ backgroundImage: `url(${imagenFondo})` }}>
      <div className="banner-content">
        <img src={imagenReact} height="20%" alt="" />
        <h1>Love For Design</h1>
        <p className="parrafo">
          デザインへの愛, amore per il design, любовь к дизайну, amor por el
          diseño en varios idioma :D by Elian Vega
        </p>
      </div>
    </div>
  );
}
