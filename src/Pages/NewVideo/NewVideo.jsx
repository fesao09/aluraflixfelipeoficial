import React, { useState } from "react";
import { useVideoContext } from "../../Contexts/VideoContext";
import {
  FormContainer,
  Input,
  Textarea,
  Button,
  FormTitle,
  Subtitle,
  Form,
  TitleForm,
  FirstLine,
  InputField,
  Label,
  SecondLine,
  InputFieldLarge,
  ThirdLine,
  Buttons,
  ButtonSecondary,
} from "./NewVideo.styled";

const NewVideo = () => {
  const { addVideo } = useVideoContext();
  const [video, setVideo] = useState({
    categoria: "",
    descricao: "",
    img: "",
    link: "",
    titulo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVideo({ ...video, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addVideo(video);
    setVideo({
      categoria: "",
      descricao: "",
      img: "",
      link: "",
      titulo: "",
    });
  };

  const handleReset = () => {
    setVideo({
      categoria: "",
      descricao: "",
      img: "",
      link: "",
      titulo: "",
    });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>Adicionar Novo Vídeo</FormTitle>
      <Subtitle>Complete o formulário para criar um novo card de vídeo.</Subtitle>
      <Form>
        <FirstLine>
          <InputField>
            <Label>Título</Label>
            <Input
              type="text"
              name="titulo"
              placeholder="Título"
              value={video.titulo}
              onChange={handleChange}
              required
            />
          </InputField>
          <InputFieldLarge>
            <Label>Categoria</Label>
            <Input
              type="text"
              name="categoria"
              placeholder="Categoria"
              value={video.categoria}
              onChange={handleChange}
              required
            />
          </InputFieldLarge>
        </FirstLine>
        <SecondLine>
          <InputFieldLarge>
            <Label>Imagem</Label>
            <Input
              type="text"
              name="img"
              placeholder="URL da Imagem"
              value={video.img}
              onChange={handleChange}
              required
            />
          </InputFieldLarge>
          <InputFieldLarge>
            <Label>Vídeo</Label>
            <Input
              type="text"
              name="link"
              placeholder="URL do Vídeo"
              value={video.link}
              onChange={handleChange}
              required
            />
          </InputFieldLarge>
        </SecondLine>
        <ThirdLine>
          <InputField>
            <Label>Descrição</Label>
            <Textarea
              name="descricao"
              placeholder="Descrição"
              value={video.descricao}
              onChange={handleChange}
              required
            />
          </InputField>
        </ThirdLine>
        <Buttons>
          <Button type="submit">Salvar</Button>
          <ButtonSecondary type="button" onClick={handleReset}>
            Limpar
          </ButtonSecondary>
        </Buttons>
      </Form>
    </FormContainer>
  );
};

export default NewVideo;
