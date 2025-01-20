import styled from "styled-components";

export const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.background};

  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  flex: 1;
`;

export const Title = styled.h2`
  font-family: 'Roboto';
  font-weight: 900;
  font-size: 2rem;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: ${({ category }) => {
    switch (category) {
      case 'Front End':
        return 'blue';
      case 'Back End':
        return 'green';
      case 'Mobile':
        return 'yellow';
      default:
        return 'transparent';
    }
  }};
  color: #fff;
`;
