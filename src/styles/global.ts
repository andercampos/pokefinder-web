import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, html, #root {
    height: 100%;
  }

  body {
    background: var(--background);
  }

  body, input, button {
    font: 16px 'Poppins', sans-serif;
    color: var(--text-color);
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }

  :root {
    --background: #131515;
    --shape: #2b2c28;
    --primary-color: #58bead;
    --primary-hover: #339989;
    --text-color: #fffafb;
  }
`;
