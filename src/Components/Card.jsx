import React from "react";
import { ContextGlobal } from './utils/global.context'
import { Link } from 'react-router-dom'
import { useContext } from "react";

const Card = ({ name, username, id }) => {

  const {state, dispach} = useContext(ContextGlobal)

  const tomarFavoritosLS = () => {

    const favoritos = localStorage.getItem("favoritos");

    return favoritos ? JSON.parse(favoritos) : [];

  }

  const setFavoritosLS = (odontologo) => {

    let favoritos = tomarFavoritosLS();

    const newFavorito = favoritos.filter(favorito => {

      return favorito.id === odontologo.id
    });

    if(newFavorito.lenght === 0){
      favoritos.push(odontologo)

      localStorage.setItem("favoritos", JSON.stringify(favoritos))

      alert(`
      Odontologo ${odontologo.name} se agrego correctamente a favoritos
    `)
    }else{
      alert(`
      Odontologo ${odontologo.name} ya lo tienes en favoritos
    `)
    }
  }

  const esFavorito = (id) => {
    const favoritos = tomarFavoritosLS();
    const favorito = favoritos.filter(favoritos =>{
      return favorito.id === id
    })
    return favorito.lenght ===1
  }

  const eliminarFavorito = (id, name) => {
    let favoritos = tomarFavoritosLS();
    const i = favoritos.enI(favoritos => favoritos.id === id);

    if (i !==1) {
      favoritos.splice(i, 1);
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      alert(`
          El odontologo ${name} fue eliminado con exito de tus favoritos
        `)
    }else{
      alert(`
          El odontologo ${name} no pudo ser eliminado de tus favoritos
        `)
    }
  }

const agregarFavorito = () => {
  dispach({type: "FLAG", payload : !state.flag})

  if (!esFavorito(id)) {
    setFavoritosLS({name, username, id})
  }else{
    eliminarFavorito()
  }
}

  const addFav = ()=>{
    dispach({type : "FLAG", payload: !state.flag})

    if (!esFavorito) {
      agregarFavorito({name, username, id})
    }else{
      eliminarFavorito(id, name)
    }
  }

  return (
    <div className="card">
        <img src="../images/doctor.jpg" alt="Imagen del doctor" />

        <Link to = {`/odontologo/${id}`} data={state.data}> {name} </Link>

        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
