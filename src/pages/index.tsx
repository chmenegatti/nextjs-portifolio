import React from 'react';
import { BodyContainer, Container } from '../styles/pages/Home';
import HomeImage from '../assets/home.image.png';

const Index: React.FC = () => {
  return (
    <Container>
      <BodyContainer>
        <div>
          <h5>Hello! Eu sou</h5>
          <h1>Cesar Menegatti</h1>
          <p>
            E este é meu site pessoal/portifólio onde apresentarei os
            aplicativos desenvolvidos na Stack JavaScript (Node.JS, React.JS,
            React Native, Next.JS, Styled Components e Chakra-UI)
          </p>
        </div>
        <div>
          <img src={HomeImage} alt="WebDeveloper FullStack JS" />
        </div>
      </BodyContainer>
    </Container>
  );
};

export default Index;
