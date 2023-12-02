import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContextGlobal()

  const cambiarTema = () => {
dispatch({type: 'CHANGE_THEME', payload: state.theme })
  }

  return (
    <nav id={state.theme}>
      <h3 class="nav-titulo">DH Odonto</h3>
      <nav>
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        <Link to='/'><h3>Home</h3></Link>
        <Link to='/contact'><h3>Contacto</h3></Link>
        <Link to='/favs'><h3>Favs</h3></Link>
       </nav>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button className="boton-theme" onClick={cambiarTema}>Cambiar Tema</button>
    </nav>
  )
}

export default Navbar