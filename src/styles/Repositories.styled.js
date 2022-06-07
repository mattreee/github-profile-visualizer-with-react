import styled from "styled-components";

export const RepositoriesWrapper = styled.section`
   width: clamp(70%, 500px, 100%);
   background-color: #444;
   padding: 1rem;
   border-radius: 10px;
`;

export const ButtonsWrapper = styled.div`
   margin-bottom: 1rem;
   display: flex;
   gap: .2rem;

   button {
      font-family: "Poppins", sans-serif;
      font-size: 1.1rem;
      margin-left: 1rem;
      padding: .4em 1em;
      border-radius: 5px;
      border: none;

      &:hover {
         transform: scale(1.02);
      }

      &:active {
         transform: scale(1.01);
      }
   }
`;

export const ListWrapper = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
   gap: 1rem;
`;