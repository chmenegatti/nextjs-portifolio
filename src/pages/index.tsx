import React from 'react';
import { BodyContainer, Container } from '../styles/pages/Home';
import LinuxICon from '../assets/linux.svg';

const Index: React.FC = () => {
  return (
    <Container>
      <BodyContainer>
        <div>
          <h5>Hello! My name is</h5>
          <h1>Cesar Menegatti</h1>
          <p>
            And this is my personal portifolio where i&apos;ll show all of my
            jobs with JavaScrip (Node.JS, React.JS, React Native, Next.JS,
            Styled Components and Chakra-UI
          </p>
        </div>
        <div>
          <LinuxICon />
        </div>
      </BodyContainer>
    </Container>
  );
};

export default Index;
