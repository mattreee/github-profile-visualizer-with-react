import styled from "styled-components";

export const ProfileWrapper = styled.section`
   background-color: #444;
   display: flex;
   flex-direction: column;
   height: fit-content;
   gap: 1rem;
   padding: .5rem 1rem;
   border-radius: 10px;

   img {
      align-self: center;
      max-width: 10rem;
      border-radius: 50%;
   }
`;