import React, { useState, useEffect } from 'react';
import { useVideoContext } from "../Contexts/VideoContext.jsx"; // Atualizar a extensão para .jsx
import { FormContainer, Form, FormLabel, FormInput, FormTextarea, FormButton, Overlay, FormTitle, CloseButton, FormField, ButtonContainer } from "./UpdateForm.styled";

const UpdateForm = () => {
  const { currentVideo, updateVideo, closeUpdateForm } = useVideoContext();
  const [formData, setFormData] = useState({
    titulo: '',
    categoria: '',
    img: '',
    url: '',
    descricao: '',
  });

  useEffect(() => {
    if (currentVideo) {
      setFormData(currentVideo);
    }
  }, [currentVideo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateVideo(currentVideo.id, formData);
    closeUpdateForm();
  };

  if (!currentVideo) return null;

  return (
    <>
      <Overlay />
      <FormContainer>
        <CloseButton onClick={closeUpdateForm}>×</CloseButton>
        <FormTitle>Editar Card:</FormTitle>
        <Form onSubmit={handleSubmit}>
          <FormField>
            <FormLabel>
              Título:
            </FormLabel>
            <FormInput
              type="text"
              name="titulo"
              value={formData.titulo}
              onChange={handleChange}
            />
          </FormField>
          <FormField>
            <FormLabel>
              Categoria:
            </FormLabel>
            <FormInput
              type="text"
              name="categoria"
              value={formData.categoria}
              onChange={handleChange}
            />
          </FormField>
          <FormField>
            <FormLabel>
              Imagem:
            </FormLabel>
            <FormInput
              type="text"
              name="img"
              value={formData.img}
              onChange={handleChange}
            />
          </FormField>
          <FormField>
            <FormLabel>
              Vídeo:
            </FormLabel>
            <FormInput
              type="text"
              name="url"
              value={formData.url}
              onChange={handleChange}
            />
          </FormField>
          <FormField>
            <FormLabel>
              Descrição:
            </FormLabel>
            <FormTextarea
              name="descricao"
              value={formData.descricao}
              onChange={handleChange}
            />
          </FormField>
          <ButtonContainer>
            <FormButton type="submit">Atualizar</FormButton>
            <FormButton type="button" onClick={closeUpdateForm}>Cancelar</FormButton>
          </ButtonContainer>
        </Form>
      </FormContainer>
    </>
  );
};

export default UpdateForm;
