import React from 'react';
import Button from '../Button'
import { Link } from 'react-router-dom';
// import ButtonLink from './components/ButtonLink';

import './style.css'

import Logo from '../../assets/img/Logo.png'

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Devflix logo"/>
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;