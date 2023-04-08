import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from '../Components/utils/global.context'
import { useEffect } from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {dispach, state} = useContext(ContextGlobal);

  const tomarFavoritosLS = () => {
    const favoritos = localStorage.getItem("favoritos")
    return favoritos ? JSON.parse(favoritos) : []
  }

  useEffect(() => {
    const favorito = tomarFavoritosLS()

    dispach({type: "FAV", paylaod: favorito})
  },[dispach, state.flag])

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favorito.map((odontologo) => <Card key={odontologo.id} name={odontologo.name} username={odontologo.username} id={odontologo.id}/>)}
      </div>
    </>
  );
};

export default Favs;
