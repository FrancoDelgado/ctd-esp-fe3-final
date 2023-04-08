import React, { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'
import { Link } from 'react-router-dom'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {dispach, state} = useContext(ContextGlobal);

  const cambioTema = () => {

    dispach({type : "tema", payload: state.tema === "light"?"dark":"light"})
  }

  return (
    <nav>
      <div>
        <nav>
          <Link to = {"/"}>Home</Link>
          <Link to = {"favoritos"}>Favoritos</Link>
          <Link to = {"/contact"}>Contactos</Link>
        </nav>
      </div>
      <button onClick={cambioTema}>{state.tema === "light"?"Tema Oscuro":"Tema Claro"}</button>
    </nav>
  )
}

export default Navbar