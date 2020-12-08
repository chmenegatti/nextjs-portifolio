import React from 'react';
import Burger from './Burger';
import logoTipo from '../assets/logotipo.png';

import { Nav } from '../styles/components/NavBar';

const NavBar: React.FC = () => {
  return (
    <Nav>
      <div className="logotipo">
        <img src={logoTipo} alt="Cesar Menegatti" />
      </div>
      <Burger />
    </Nav>
  );
};

export default NavBar;
