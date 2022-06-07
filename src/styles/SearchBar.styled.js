import styled from "styled-components";

export const SearchStyles = styled.form`
   height: 3rem;
   display: flex;
   align-items: center;
   gap: 1rem;
   max-width: 800px;
   margin: 0 auto;

   input {
      width: 100%;
      font-size: 1.2rem;
      padding: .2em 2em;
      border-radius: 4px;
      outline: none;
   }

   button {
      background-color: transparent;
      color: #eee;
      padding: .1em 1em;
      font-size: 1.2rem;
      padding: .2em 2em;
      border: 2px solid white;
      border-radius: 4px;
      transition: 100ms;

      &:hover {
         transform: scale(1.02);
      }

      &:active {
         transform: scale(1.01);
      }
   }
`