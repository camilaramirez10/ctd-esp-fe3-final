import React from "react";
import { Link } from 'react-router-dom'
import doctor_imagen from '../img/doctor.jpg'


const Card = ({ odonto }) => {

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    var odontoList = JSON.parse(localStorage.getItem('odonto'))
    if (!odontoList) odontoList = []
    odontoList.push(odonto)
    localStorage.setItem('odonto', JSON.stringify(odontoList))
  }

  return (

    <div className="card">

      <Link to={'/detail/' + odonto.id}>
        <img src={doctor_imagen} alt="beer-detail" width="200" />
        <h3>{odonto.name}</h3>
        <h2>{odonto.username}</h2>
      </Link>
      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
