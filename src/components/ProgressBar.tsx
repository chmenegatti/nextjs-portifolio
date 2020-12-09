import React from 'react';
import { Container, Filler, Label } from '../styles/components/ProgressBar';

interface ProgressProps {
  barColor: string;
  completed: number;
}

const ProgressBar: React.FC<ProgressProps> = ({
  barColor,
  completed,
  children,
}) => {
  return (
    <Container>
      <Filler barColor={barColor} progressFill={completed}>
        <Label>{children}</Label>
      </Filler>
    </Container>
  );
};

export default ProgressBar;
