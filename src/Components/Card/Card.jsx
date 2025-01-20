import { FaEdit, FaTrashAlt } from "react-icons/fa";
import {
  CardActions,
  CardContainer,
  CardImage,
  IconButton,
} from "./Card.styled";

import { useVideoContext } from "../../Contexts/VideoContext";

const Card = ({ video }) => {
  const { deleteVideo, openUpdateForm } = useVideoContext();

  const handleEdit = () => {
    openUpdateForm(video);
  };

  const handleImageClick = () => {
    console.log("Video Object:", video); // Adicionar log do objeto video
    if (video && video.url) {
      console.log("Video URL:", video.url); // Verificar a URL
      window.open(video.url, "_blank");
    } else {
      console.error("URL do vídeo está vazia ou incorreta");
    }
  };

  return (
    <CardContainer>
      <CardImage src={video.img} alt={video.title} onClick={handleImageClick} />
      <CardActions>
        <IconButton onClick={() => deleteVideo(video.id)}>
          <FaTrashAlt />
        </IconButton>

        <IconButton onClick={handleEdit}>
          <FaEdit />
        </IconButton>
      </CardActions>
    </CardContainer>
  );
};

export default Card;
