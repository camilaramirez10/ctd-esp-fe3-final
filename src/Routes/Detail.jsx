import React from 'react'
import { useParams } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'
import { useEffect, useState } from 'react'
import axios from 'axios'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {theme, setTheme} = useContextGlobal()
  const params = useParams()

  const url = 'https://jsonplaceholder.typicode.com/users/:${params.id}'

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  useEffect(() => {
    axios(url)
    .then(response => console.log(response.cerveza))
  },[])

  return (
    <div id={theme}>
      <h1>Detalle Odontologo</h1>
      <h3>{cerveza.name}</h3>
      <p>{cerveza.tagline}</p>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  )
}

export default Detail