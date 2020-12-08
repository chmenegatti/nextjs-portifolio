import React from 'react';
import { FiFilePlus, FiHome, FiInfo, FiMail, FiUsers } from 'react-icons/fi';
import { Ul } from '../styles/pages/components/RighNav';

interface BurgerProps {
  open: boolean;
}
const RightNav: React.FC<BurgerProps> = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <a href="#">
          <FiHome />
          <div>Home</div>
        </a>
      </li>
      <li>
        <a href="#">
          <FiInfo />
          <div>About</div>
        </a>
      </li>
      <li>
        <a href="#">
          <FiFilePlus />
          <div>Jobs</div>
        </a>
      </li>
      <li>
        <a href="#">
          <FiUsers />
          <div>Social</div>
        </a>
      </li>
      <li>
        <a href="#">
          <FiMail />
          <div>Contact</div>
        </a>
      </li>
    </Ul>
  );
};

export default RightNav;
