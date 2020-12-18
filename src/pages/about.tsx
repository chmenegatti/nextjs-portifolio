import React from 'react';
import ProgressBar from '../components/ProgressBar';
import {
  AboutSection,
  Container,
  GridContent,
  HeaderSection,
  BodySection,
  SkilsSection,
} from '../styles/pages/About';

const About: React.FC = () => {
  const skillsData = [
    { title: 'Node.JS', barColor: '#276749', completed: '95' },
    { title: 'React.JS/Next.JS', barColor: '#29487D', completed: '92' },
    { title: 'React Native', barColor: '#0063D1', completed: '89' },
    { title: 'JavaScript', barColor: '#fdd90a', completed: '98' },
    { title: 'HTML/CSS', barColor: '#65008d', completed: '99' },
  ];

  return (
    <Container>
      <GridContent>
        <HeaderSection>Sobre Mim</HeaderSection>
        <BodySection>
          <AboutSection>
            <h3>Howdy!</h3>
            <p>
              Meu nome é Cesar Menegatti eu sou desenvolvedor FullStack
              JavaScript Durante os últimos anos tenho estudado e me
              aperfeiçoado em NodeJS, ReacJS, React Native, outros FrameWorks
              JavaScript. Nesses estudos desenvolvi aplicações para uso local.
              Participei de todos os workshops promovidos pela RocketSeat
              através da semana OmniStack e das New Level Weeks. Concluí com
              êxito o BootCamp GoStack da RocketSeat em 2020.
              <br />
              Nice to meet you! :)
            </p>
          </AboutSection>
          <SkilsSection>
            <h3>Skills</h3>
            <ul>
              {skillsData.map((itens, key) => (
                <li key={key}>
                  {itens.title}
                  <ProgressBar
                    value={itens.completed}
                    barColor={itens.barColor}>
                    {itens.completed}%
                  </ProgressBar>
                </li>
              ))}
            </ul>
          </SkilsSection>
        </BodySection>
      </GridContent>
    </Container>
  );
};

export default About;
