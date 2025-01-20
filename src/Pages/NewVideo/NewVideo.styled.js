import styled from "styled-components";

// Contêiner principal do formulário
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 0px 0.75rem 0.25rem #2271d1;
`;

// Estilização genérica para campos de input e textarea
const FieldBase = styled.input`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.color};
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Input = styled(FieldBase)``;
export const Textarea = styled(FieldBase).attrs({ as: "textarea" })`
  resize: none;
`;

export const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.color};
  background-color: ${({ theme }) => theme.colors.background};
`;

// Botões reutilizáveis
const ButtonBase = styled.button`
  width: 180px;
  height: 54px;
  border-radius: 15px;
  padding: 0.75rem;
  border: 2px solid #f5f5f5;
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
  font-family: 'Source Sans Pro';
  font-weight: 900;
  font-size: 20px;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const Button = styled(ButtonBase)``;
export const ButtonSecondary = styled(ButtonBase)`
  background-color: transparent;
  color: #2271d1;
  border: 2px solid #2271d1;
`;

// Títulos e textos
export const FormTitle = styled.h2`
  font-family: 'Roboto';
  font-weight: 900;
  font-size: 2rem;
  text-align: center;
  text-transform: uppercase;
  color: #f5f5f5;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  font-family: 'Roboto';
  font-size: 1rem;
  text-align: center;
  color: #fff;
  margin-bottom: 2rem;
`;

export const TitleForm = styled.div`
  width: 322px;
  height: 75px;
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

// Estrutura do formulário
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FirstLine = styled.div`
  display: flex;
  gap: 1rem;
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`;

export const InputFieldLarge = styled(InputField)`
  flex: 1;
`;

export const Label = styled.label`
  font-family: 'Source Sans Pro';
  font-weight: 600;
  font-size: 1rem;
  color: #fff;
`;

export const SecondLine = styled(FirstLine)``;
export const ThirdLine = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;
