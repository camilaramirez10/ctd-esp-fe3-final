import React from "react";
import { useState } from 'react'

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
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
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Ingrese nombre completo' onChange={handleChangeNombre} />
        <input type="text" placeholder='Ingrese el email' onChange={handleChangeEmail} />
        <button type='submit'>Validar </button>
      </form>
    </div>
  );
};

export default Form;
