import React from 'react';

import {
  CardBody,
  CardContainer,
  CardContent,
  BadgeContainer,
  Badge,
} from '../styles/components/Cards';

import badgeColors from '../data/badgeColors.json';
interface CardProps {
  title: string;
  imageUrl: string;
  description: string;
  url: string;
  badge: string[];
}

const Cards: React.FC<CardProps> = props => {
  return (
    <CardContainer>
      <CardBody className="card">
        <div className="circle">
          <img src={props.imageUrl} alt={props.title} />
        </div>
        <CardContent>
          <BadgeContainer>
            {props.badge.map((badge, index) => {
              const picked = badgeColors.find(item => item.badgeName === badge);
              return (
                <Badge
                  key={index}
                  bgColor={!picked ? '#444' : picked.badgeColor}
                  fontColor={!picked ? '#fff' : picked.fontColor}>
                  {badge}
                </Badge>
              );
            })}
          </BadgeContainer>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <a href={props.url}>
            <div className="click">Go To Repo</div>
          </a>
        </CardContent>
      </CardBody>
    </CardContainer>
  );
};

export default Cards;
