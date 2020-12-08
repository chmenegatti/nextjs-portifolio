import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${props => props.theme.white};
    color: ${props => props.theme.teal[800]};
    font: 400 16px Roboto, sans-serif;
  }
`;
