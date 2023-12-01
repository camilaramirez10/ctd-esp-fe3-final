import React from 'react'
import dh_imagen from '../img/DH.png'
import { useContextGlobal } from './utils/global.context'
import facebook from '../img/ico-facebook.png'
import insta from '../img/ico-instagram.png'
import whap from '../img/ico-whatsapp.png'
import tiktok from '../img/ico-tiktok.png'

const Footer = () => {
  const {theme, setTheme} = useContextGlobal()

  return (
    <footer id={theme}>
        <p>Powered by</p>
        <img src={dh_imagen} alt='DH-logo' />
        <div>
          <img src={facebook} alt='logo_facebook' /> 
          <img src={insta} alt='logo_insta' />    
          <img src={whap} alt='logo_whasap' />
          <img src={tiktok} alt='logo_tiktok' />    
        </div>
</footer>
  )
}

export default Footer
