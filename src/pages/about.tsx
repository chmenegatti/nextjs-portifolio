import { valueOf } from '*.jpg';
import React, { useEffect, useState } from 'react';
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
    { key: 1, title: 'Node.JS', barColor: '#276749', completed: 95 },
    { key: 2, title: 'Reac.JS/Next.JS', barColor: '#29487D', completed: 92 },
    { key: 3, title: 'React Native', barColor: '#0063D1', completed: 89 },
  ];

  useEffect(() => {}, []);

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
              some applications where they will be presented here.
            </p>
          </AboutSection>
          <SkilsSection>
            <h3>Skills</h3>
            <ul>
              {skillsData.map(itens => (
                <li key={itens.key}>
                  {itens.title}
                  <ProgressBar
                    completed={itens.completed}
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
