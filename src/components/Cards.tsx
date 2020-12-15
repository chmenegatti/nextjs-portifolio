import React from 'react';

import {
  CardBody,
  CardContainer,
  CardContent,
  BadgeContainer,
  Badge,
} from '../styles/components/Cards';
interface CardProps {
  title: string;
  imageUrl: string;
  description: string;
  url: string;
  badge: string[];
}

const Cards: React.FC<CardProps> = props => {
  const badgeColors = [
    { badgeName: 'JavaScript', badgeColor: '#f7e244', fontColor: '#000' },
    { badgeName: 'NodeJS', badgeColor: '#42853D', fontColor: '#fff' },
    { badgeName: 'React', badgeColor: '#49CEF7', fontColor: '#000' },
    { badgeName: 'ReactNative', badgeColor: '#00A1E1', fontColor: '#fff' },
    { badgeName: 'MongoDB', badgeColor: '#009647', fontColor: '#fff' },
    { badgeName: 'PostgreSQL', badgeColor: '#31648D', fontColor: '#fff' },
    { badgeName: 'TypeScript', badgeColor: '#3174C0', fontColor: '#fff' },
  ];

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
