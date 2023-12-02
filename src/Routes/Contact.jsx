import React from 'react'
import Form from '../Components/Form'

import { useContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const {state} = useContextGlobal()

  

  return (
    <div id={state.theme}>
      <h2 class="titulo">Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form></Form>

    </div>


  )
}

export default Contact
