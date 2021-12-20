import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Jetbrains Mono', sans-serif;
  }

  body{
    background: #222;
    font-size: 16px;
    color: #FFB300;
  }
  p{
    font-size: 15px;
  }
`;
