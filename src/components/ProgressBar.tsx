import React from 'react';
import { Container, Filler, Label } from '../styles/components/ProgressBar';

interface ProgressProps {
  barColor: string;
  value: string;
}

const ProgressBar: React.FC<ProgressProps> = ({
  barColor,
  value,
  children,
}) => {
  return (
    <Container>
      <Filler barColor={barColor} progressFill={value}>
        {console.log(value)}
        <Label>{children}</Label>
      </Filler>
    </Container>
  );
};

export default ProgressBar;
