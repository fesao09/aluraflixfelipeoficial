import styled from "styled-components";

export const CategoryTitle = styled.h2`
  width: 100%; /* Responsivo */
  max-width: 400px; /* Limita o tamanho máximo */
  background-color: ${({ theme, category }) =>
    theme.colors.categoryColors[category]};
  color: #fff;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  margin: 1rem auto; /* Centraliza no container */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra leve */
  transform: translateY(-20px);
  opacity: 0;
  animation: fadeIn 0.5s ease-out forwards;

  @keyframes fadeIn {
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
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
