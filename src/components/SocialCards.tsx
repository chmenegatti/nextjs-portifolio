import React from 'react';
import { FiFacebook, FiInfo, FiInstagram, FiTwitter } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';
import { SocialCard } from '../styles/components/Social';
import Link from 'next/link';

interface CardsProps {
  social: string;
  icon: string;
  link: string;
}

const SocialCards: React.FC<CardsProps> = props => {
  let icon;

  switch (props.icon) {
    case 'facebook':
      icon = <FiFacebook />;
      break;
    case 'instagram':
      icon = <FiInstagram />;
      break;
    case 'tweeter':
      icon = <FiTwitter />;
      break;
    case 'discord':
      icon = <FaDiscord />;
      break;
    default:
      icon = <FiInfo />;
      break;
  }

  return (
    <SocialCard>
      <div className="face face1">
        <div className="content">
          {icon}
          <h3>{props.social}</h3>
        </div>
      </div>
      <div className="face face2">
        <div className="content">
          <h3>I&#39;ll see you on {props.social}</h3>
          <Link href={props.link}>
            <a href={props.link} target="new">
              Visit
            </a>
          </Link>
        </div>
      </div>
    </SocialCard>
  );
};

export default SocialCards;
