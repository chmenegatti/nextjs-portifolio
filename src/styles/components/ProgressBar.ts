import styled from 'styled-components';

interface ProgressProps {
  barColor: string;
  progressFill: number;
}

export const Container = styled.div`
  height: 20px;
  width: 100%;
  background-color: #ccc;
  border-radius: 8px;
  margin: 8px 0;
`;

export const Filler = styled.div<ProgressProps>`
  height: 100%;
  width: ${props => props.progressFill}%;
  background-color: ${props => props.barColor};
  transition: width 1s ease-in-out;
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
