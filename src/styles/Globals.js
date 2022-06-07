import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   * {
      box-sizing: border-box;
      margin: 0;
   }

   body {
      background-color: #333;
      color: #eee;
      font-family: "Poppins", sans-serif;
   }
`;

export default GlobalStyles;