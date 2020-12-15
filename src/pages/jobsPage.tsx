import React from 'react';
import Cards from '../components/Cards';
import { BodyContainer } from '../styles/components/Cards';
import tinDevImg from '../assets/tindev.png';
import airCncImg from '../assets/aircnc.png';
import devRadarImg from '../assets/devradar.png';

interface CardsProps {
  title: string;

}

const jobsPage: React.FC<CardsProps> = () => {
  return (
    <BodyContainer>
      <Cards
        title="TinDev"
        description="App desenvolvido durante a Semana Omnistack 8 para conectar outros devs com o mesmo interesse em programação. Tecnologias usadas: NodeJS, ReactJS e ReactNative."
        imageUrl={tinDevImg}
        url="https://github.com/chmenegatti/omnistack08-tindev"
        badge={['JavaScript', 'NodeJS', 'React', 'React Native', 'MongoDB']}
      />
      <Cards
        title="AirCnC"
        description="App desenvolvido durante a Semana Omnistack 9 para encontrar locais para estudar e desenvolver projetos. Tecnologias usadas: NodeJS, ReactJS e ReactNative."
        imageUrl={airCncImg}
        url="https://github.com/chmenegatti/omnistack09-aircnc"
        badge={['NodeJS', 'React', 'ReactNative']}
      />
      <Cards
        title="DevRadar"
        description="O DevRadar é um projeto que visa facilitar a busca por desenvolvedores próximos a você utilizando Google Maps. Tecnologias usadas: NodeJS, ReactJS e ReactNative."
        imageUrl={devRadarImg}
        url="https://github.com/chmenegatti/omnistack10-devradar"
        badge={['NodeJS', 'React', 'React Native']}
      />
    </BodyContainer>
  );
};

export default jobsPage;
