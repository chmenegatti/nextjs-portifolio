import styled, { Keyframes, keyframes } from 'styled-components';

interface ProgressProps {
  barColor: string;
  progressFill: string;
}

export const Container = styled.div`
  height: 20px;
  width: 100%;
  background-color: #ccc;
  border-radius: 8px;
  margin: 8px 0;
`;

const fillIt = (props: ProgressProps): Keyframes => keyframes`
  from {
    width: 0%
  }
  to {
    width: ${props.progressFill}
  }
`;

export const Filler = styled.div<ProgressProps>`
  height: 100%;
  width: ${props => props.progressFill}%;
  animation: ${fillIt} 1.2s linear normal;
  background-color: ${props => props.barColor};
  border-radius: inherit;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Label = styled.span`
  padding: 12px;
  color: white;
  font-size: 16px;
`;
