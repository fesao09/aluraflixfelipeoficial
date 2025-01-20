import React from "react";
import {
  FrontEndTitle,
  BackEndTitle,
  FrontEndCategoryTitle,
  BackEndCategoryTitle,
  MobileCategoryTitle,
} from "../../Pages/NewVideo/NewVideo.styled";
import {
  NewVideoContainer,
  EditDeleteContainer,
  VideoImage,
} from "../Card/Card.styled";

const VideoCard = ({ video }) => {
  return (
    <NewVideoContainer>
      <VideoImage />
      <EditDeleteContainer>
        {/* Add edit and delete buttons here */}
      </EditDeleteContainer>
      <div>
        {video.categoria === "Front End" ? (
          <FrontEndTitle>{video.titulo}</FrontEndTitle>
        ) : video.categoria === "Back End" ? (
          <BackEndTitle>{video.titulo}</BackEndTitle>
        ) : (
          <h1>{video.titulo}</h1>
        )}
        {video.categoria === "Front End" ? (
          <FrontEndCategoryTitle>{video.categoria}</FrontEndCategoryTitle>
        ) : video.categoria === "Back End" ? (
          <BackEndCategoryTitle>{video.categoria}</BackEndCategoryTitle>
        ) : video.categoria === "Mobile" ? (
          <MobileCategoryTitle>{video.categoria}</MobileCategoryTitle>
        ) : (
          <h2>{video.categoria}</h2>
        )}
      </div>
    </NewVideoContainer>
  );
};

export default VideoCard;
