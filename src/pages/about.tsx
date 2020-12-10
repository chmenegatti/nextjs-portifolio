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
        <HeaderSection>About Me</HeaderSection>
        <BodySection>
          <AboutSection>
            <h3>Howdy!</h3>
            <p>
              My name is Cesar Menegatti and i am a FullStack JavaScript
              Developer. During the last few years I have been studying NodeJS,
              ReacJS, React Native, and other javascript frameworks. During that
              time I developed some applications for local use. I participated
              in RocketSeat&apos;s OmniStack and Next Level Weeks developing
              some applications where they will be presented here. <br />
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
