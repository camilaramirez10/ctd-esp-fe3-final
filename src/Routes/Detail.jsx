import React from 'react'
import { useParams } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'
import { useEffect, useState } from 'react'
import axios from 'axios'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {state} = useContextGlobal()

  const [odonto,setOdonto] = useState({})
  const params = useParams()
  console.log(params)
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`
  console.log(url)
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  useEffect(() => {
    axios(url)
    .then(res => {
      console.log(res.data)
      setOdonto(res.data)
    })
  }, [])

  return (
    <div id={state.theme}>
      <h1 class="titulo">Detalle Odontologo</h1>
      <table>
        <tr>
          <td>
            <strong>Nombre</strong>
            <br></br>
            {odonto.name}
          </td>
          <td>
          <strong>Email</strong>
            <br></br>
            {odonto.email}
          </td>
          <td>
          <strong>Telefono</strong>
            <br></br>
            {odonto.phone}
          </td>
          <td>
          <strong>Sitio Web</strong>
            <br></br>
            {odonto.website}
          </td>
        </tr>
      </table>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  )
}

export default Detail