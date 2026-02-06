import React from "react";
import "./RangosPage.css";
import { Link } from "react-router-dom";
import Header from "../Inc/Header";
import Footer from "../Inc/Footer";

interface Rango {
  nombre: string;
  descripcion: string;
  imagen: string;
}

// Lista de rangos
const rangos: Rango[] = [
  {
    nombre: "Samurai",
    descripcion: "Guerreros honorables del servidor, expertos en combate.",
    imagen: "/img/rangos/samurai.png",
  },
  {
    nombre: "Daimyo",
    descripcion: "Señores feudales con gran poder y prestigio.",
    imagen: "/img/rangos/daimyo.png",
  },
  {
    nombre: "Sensei",
    descripcion: "Maestros legendarios que guían a los guerreros.",
    imagen: "/img/rangos/sensei.png",
  },
  {
    nombre: "Kami",
    descripcion: "Entidades divinas con habilidades sobrenaturales.",
    imagen: "/img/rangos/kami.png",
  },
  {
    nombre: "Shogun",
    descripcion: "El rango supremo del servidor, líder absoluto.",
    imagen: "/img/rangos/shogun.png",
  },
];

const VerRangos: React.FC = () => {
  return (
    <>
      <Header />
      <div className="rangos-page">
        <div className="rangos-header">
          <h1 className="rangos-title">Rangos del Servidor</h1>
          <p className="rangos-subtitle">
            Descubre los rangos, cada uno con su honor, historia y poder.
          </p>
        </div>

        <div className="rangos-grid">
          {rangos.map((rango, index) => {
            // Determina la ruta según el nombre del rango
            let ruta = "";
            switch (rango.nombre.toLowerCase()) {
              case "samurai":
                ruta = "/rango-samurai";
                break;
              case "daimyo":
                ruta = "/rango-daimyo";
                break;
              case "sensei":
                ruta = "/rango-sensei";
                break;
              case "kami":
                ruta = "/rango-kami";
                break;
              case "shogun":
                ruta = "/rango-shogun";
                break;
            }

            return (
              <Link key={index} to={ruta} className="rango-card">
                <div className="rango-img-container">
                  <img src={rango.imagen} alt={rango.nombre} />
                </div>
                <h2 className="rango-name">{rango.nombre}</h2>
                <p className="rango-desc">{rango.descripcion}</p>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VerRangos;
