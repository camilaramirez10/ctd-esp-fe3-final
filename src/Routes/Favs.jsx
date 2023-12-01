import React from "react";
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {theme, setTheme} = useContextGlobal()
  const odontoList = JSON.parse(localStorage.getItem('odonto'))

  return (
    <div id={theme}>
      <h1 class="titulo">Dentistas favoritos</h1>
      <div className="card-grid">
      {odontoList.map((odonto) => <Card odonto={odonto} key={odonto.id} />)}
      
       {/* <button onClick={() =>localStorage.removeItem('')}>Eliminar favorito</button>
         este componente debe consumir los destacados del localStorage */}
      
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
   

    </div>
  );
};

export default Favs;
