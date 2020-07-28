import React from 'react';
import Button from '../Button'
// import ButtonLink from './components/ButtonLink';

import './style.css'

import Logo from '../../assets/img/Logo.png'

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Devflix logo"/>
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;