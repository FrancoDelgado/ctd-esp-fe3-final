import React, { useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'
import axios from 'axios'
import { useEffect } from 'react'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {


  const {dispach, state} = useContext(ContextGlobal);

  const data = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')

    .then(res => {
      dispach({type: "DATA", payload: res.data})
    })

    .catch(error => console.log("Ocurrio un error", error))
  }

useEffect(() =>{
  data()

// eslint-disable-next-line react-hooks/exhaustive-deps
},[])

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {state.data.map((odontologo) => <Card key={odontologo.id} name={odontologo.name} username={odontologo.username} id={odontologo.id}/>)}
      </div>
    </main>
  )
}

export default Home