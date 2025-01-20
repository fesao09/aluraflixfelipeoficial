import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 84px 0px;
  position: fixed;
  width: 974px;
  height: 1140px;
  left: calc(50% - 487px);
  top: calc(50% - 570px);
  background: #03122F;
  border: 5px solid #6BD1FF;
  border-radius: 15px;
  z-index: 1000;
  color: #fff;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px; /* Adicionar espaçamento entre os campos */
`;

export const FormTitle = styled.h2`
  margin: 0 auto;
  width: 575px;
  height: 70px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-size: 60px;
  line-height: 70px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #2271D1;
  margin-bottom: auto; /* Ajustar espaçamento abaixo do título */
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 15px;
  margin: 0 auto;
  width: 573px;
  height: 108px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const FormLabel = styled.label`
  width: 164px;
  height: 31px;
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  color: #FFFFFF;
`;

export const FormInput = styled.input`
  width: 573px;
  height: 62px;
  padding: 0.5rem;
  border: 3px solid #2271D1;
  border-radius: 10px;
  margin-top: 0.5rem;
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-transform: lowercase;
  color: #A5A5A5;
  background: #03122F; /* Ajustar o fundo para o mesmo do plano de fundo */
`;

export const FormTextarea = styled.textarea`
  width: 573px;
  height: 112px; /* Ajustar a altura do campo de descrição */
  padding: 0.5rem;
  border: 3px solid #2271D1;
  border-radius: 10px;
  margin-top: 0.5rem;
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-transform: lowercase;
  color: #A5A5A5;
  background: #03122F; /* Ajustar o fundo para o mesmo do plano de fundo */
  resize: none; /* Desabilitar redimensionamento */
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 210px;
  margin: 0 auto;
  width: 974px;
  height: 54px;
  flex: none;
  order: 6;
  align-self: stretch;
  flex-grow: 0;
`;

export const FormButton = styled.button`
  width: 180.12px;
  height: 54px;
  border-radius: 15px;
  padding: 0.75rem;
  border: 2px solid #F5F5F5;
  background-color: rgba(0, 0, 0, 0.9);
  color: #FFFFFF;
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;
  cursor: pointer;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    color: #6BD1FF;
  }
`;
