import React from "react";
import {
  FrontEndTitle,
  BackEndTitle,
  FrontEndCategoryTitle,
  BackEndCategoryTitle,
  MobileCategoryTitle,
} from "../../Pages/NewVideo/NewVideo.styled";

const VideoCard = ({ video }) => {
  return (
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
      {/* ...existing code... */}
    </div>
  );
};

export default VideoCard;
