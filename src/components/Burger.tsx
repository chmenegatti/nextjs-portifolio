import React, { useState } from 'react';
import { StyledBurger } from '../styles/pages/components/Burger';

import RightNav from './RightNav';

const Burger: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
};

export default Burger;
