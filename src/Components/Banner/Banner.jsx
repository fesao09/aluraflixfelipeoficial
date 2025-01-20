import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImg,
  BannerTitle,
} from "./Banner.styled";

const Banner = ({ video }) => {
  return (
    <BannerContainer>
      <BannerContent>
        <BannerTitle>{video.categoria}</BannerTitle>
        <BannerDescription>{video.descricao}</BannerDescription>
      </BannerContent>
      <a href={video.link} target="_blank" rel="noopener noreferrer">
        <BannerImg src={video.img} alt={video.titulo} />
      </a>
    </BannerContainer>
  );
};

export default Banner;
