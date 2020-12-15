import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContainer, Info, Sneaker } from '../styles/components/Cards';

import LinuxImg from '../assets/linux.svg';

interface CardsProps {
  title: string;
}

const Cards: React.FC<CardsProps> = props => {
  const cardContainer = useRef<HTMLDivElement>(null);
  const card = useRef<HTMLDivElement>(null);

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [title, setTitle] = useState('');
  const [sneaker, setSneaker] = useState('');

  useEffect(() => {
    cardContainer.current?.addEventListener('mousemove', e => {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      setX(xAxis);
      setY(yAxis);
    });
    cardContainer.current?.addEventListener('mouseenter', e => {
      e.preventDefault;
      setTitle('translateZ(150px)');
      setSneaker('translateZ(150px) rotateZ(-45deg)');
    });

    cardContainer.current?.addEventListener('mouseleave', e => {
      e.preventDefault;
      setX(0);
      setY(0);
      setTitle('translateZ(0)');
      setSneaker('translateZ(0) rotateZ(0)');
    });
  }, [x, y]);

  return (
    <CardContainer ref={cardContainer}>
      <Card
        ref={card}
        style={{
          transform: `rotateY(${x}deg) rotateX(${y}deg)`,
        }}>
        <Sneaker transform={sneaker}>
          <div className="circle" />
          <LinuxImg />
        </Sneaker>
        <Info transform={title}>
          <h1>{props.title}</h1>
          <h3>
            FUTURE-READY TRAINERS WITH WRAPPED BOOST FOR EXCEPTION COMFORT.
          </h3>
          <div className="purchase">
            <button>Purchase</button>
          </div>
        </Info>
      </Card>
    </CardContainer>
  );
};

export default Cards;
