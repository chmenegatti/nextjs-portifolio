import React from 'react';
import Link from 'next/link';
import { FiFilePlus, FiHome, FiInfo, FiMail, FiUsers } from 'react-icons/fi';
import { Ul } from '../styles/components/RighNav';

interface BurgerProps {
  open: boolean;
}
const RightNav: React.FC<BurgerProps> = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Link href="/">
          <a href="/">
            <FiHome />
            <div>Home</div>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a href="/about">
            <FiInfo />
            <div>About</div>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/jobsPage">
          <a href="/jobsPage">
            <FiFilePlus />
            <div>Jobs</div>
          </a>
        </Link>
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
