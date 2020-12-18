import React from 'react';
import Cards from '../components/Cards';
import { BodyContainer } from '../styles/components/Cards';
import tinDevImg from '../assets/tindev.png';
import airCncImg from '../assets/aircnc.png';
import devRadarImg from '../assets/devradar.png';
import eColetaImg from '../assets/ecoleta.png';
import proffyImg from '../assets/proffy.png';
import happyImg from '../assets/happy.png';

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
        badge={['JavaScript', 'NodeJS', 'React', 'ReactNative', 'MongoDB']}
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
        badge={['NodeJS', 'React', 'ReactNative']}
      />
      <Cards
        title="Be-The-Hero"
        description="O Be The Hero é um projeto para que ONGs possam cadastrar casos em que necessitem de ajuda a fim de que as pessoas interessadas possam verificá-los e ajudar financeiramente em um caso específico."
        imageUrl={devRadarImg}
        url="https://github.com/chmenegatti/omnistack10-devradar"
        badge={['NodeJS', 'React', 'ReactNative', 'Knex', 'StyledComp']}
      />
      <Cards
        title="E-Coleta"
        description="O Ecoleta é uma aplicação Web e Mobile para ajudar pessoas a encontrarem pontos de coleta para reciclagem em sua cidade ou região."
        imageUrl={eColetaImg}
        url="https://github.com/chmenegatti/nlw01-happy"
        badge={['TypeScript', 'NodeJS', 'React', 'ReactNative', 'Knex']}
      />
      <Cards
        title="Proffy"
        description="A proposta do projeto é uma aplicação que possa ligar quem deseja aprender, com quer ensinar. É possível encontrar alunos para o que você leciona, ou encontrar o professor para aquela matéria que você sempre quis aprender mais! Sem que haja nenhuma limitação de área!! Este é um projeto desenvolvido durante a Next Level Week, realizada pela @Rocketseat durante os dias 3 a 9 de Agosto de 2020."
        imageUrl={proffyImg}
        url="https://github.com/chmenegatti/nlw02-proffy"
        badge={[
          'TypeScript',
          'NodeJS',
          'React',
          'ReactNative',
          'Knex',
          'PostgreSQL',
        ]}
      />
      <Cards
        title="Happy"
        description="O Happy é um projeto que visa facilitar visitas aos orfanatos próximos a você 💜

        Este é um projeto desenvolvido durante a Next Level Week, realizada pela @Rocketseat durante os dias 12 a 18 de Outubro de 2020."
        imageUrl={happyImg}
        url="https://github.com/chmenegatti/nlw03-happy"
        badge={[
          'TypeScript',
          'NodeJS',
          'React',
          'ReactNative',
          'Knex',
          'PostgreSQL',
        ]}
      />
    </BodyContainer>
  );
};

export default jobsPage;
