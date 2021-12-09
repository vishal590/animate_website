import styled from "styled-components";

const InnerLayout = styled.div`
    padding: 4rem 15rem;
    @media (max-width: 1250px) {
        padding: 3rem 10rem;
      }
    @media (max-width: 950px) {
        padding: 2rem 6rem;
      }
    @media (max-width: 800px) {
        padding: 2rem 3rem;
      }
`;

const SectionStyled = styled.section`
    padding:4rem 0;
`;



export {InnerLayout,SectionStyled}