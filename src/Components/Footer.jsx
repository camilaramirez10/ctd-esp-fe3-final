import React from 'react'
import dh_imagen from '../img/DH.png'
import { useContextGlobal } from './utils/global.context'

const Footer = () => {
  const {theme, setTheme} = useContextGlobal()

  return (
    <footer id={theme}>
        <p>Powered by</p>
        <img src={dh_imagen} alt='DH-logo' />
    </footer>
  )
}

export default Footer
