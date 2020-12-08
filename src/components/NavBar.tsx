import React from 'react';
import Burger from './Burger';

import { Nav } from '../styles/pages/components/NavBar';

const NavBar: React.FC = () => {
  return (
    <Nav>
      <div className="logotipo">Logotipo</div>
      <Burger />
    </Nav>
  );
};

export default NavBar;
