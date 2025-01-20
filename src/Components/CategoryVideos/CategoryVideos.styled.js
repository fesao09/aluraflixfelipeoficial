import styled from "styled-components";

export const CategoryTitle = styled.h2`
  width: 432px; /* Largura do box */
  height: 70px; /* Altura do box */
  background-color: ${({ category }) =>
    category === 'frontend'
      ? '#0000FF' /* Azul para Front End */
      : category === 'backend'
      ? '#008000' /* Verde para Back End */
      : category === 'mobile'
      ? '#FFFF00' /* Amarelo para Mobile */
      : '#808080'}; /* Default */
  color: #F5F5F5; /* Cor do texto */
  padding: 1rem;
  border-radius: 15px;
  text-align: center;
  margin: 1rem auto; /* Centraliza no container */
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 38px;
  text-transform: uppercase;
  transform: translateY(-20px);
  opacity: 0;
  animation: fadeIn 0.5s ease-out forwards;

  @keyframes fadeIn {
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const VideoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center; /* Centraliza os vídeos */
  padding: 1rem;
  margin-bottom: 2rem; /* Espaço entre categorias */

  @media (max-width: 768px) {
    gap: 0.5rem; /* Reduz o espaço em telas menores */
  }
`;
