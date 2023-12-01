import React from 'react'
import Form from '../Components/Form'
import { useState } from 'react'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")

  const handleChangeNombre = (event) => setNombre(event.target.value.trim())
  const handleChangeEmail = (event) => setEmail(event.target.value.trim())
  const handleSubmit = (event) => {
    event.preventDefault()
    const expReg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    //esta funcion nos devuelve true o false
    const esValido = expReg.test(email)
    if (nombre.length > 5 && esValido == true) {
      alert(`Gracias ${nombre}, te contactaremos cuando antes vía mail`)
    }
    else {
      alert('Por favor verifique su información nuevamente')
    }
  }

  return (
    <div>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Ingrese nombre completo' onChange={handleChangeNombre} />
        <input type="text" placeholder='Ingrese el email' onChange={handleChangeEmail} />
        <button type='submit'>Validar </button>
      </form>

    </div>


  )
}

export default Contact
