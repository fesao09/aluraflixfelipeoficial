import React, { useEffect, useState } from "react";
import { VideoProvider, useVideoContext } from "../../Contexts/VideoContext.jsx"; // Atualizar a extensão para .jsx
import { Main } from "./Home.styled";
import CategoryVideos from "../../Components/CategoryVideos/CategoryVideos";
import Banner from "../../Components/Banner/Banner";
import UpdateForm from "../../Components/UpdateForm";

const HomeContent = () => {
  const { videos, loading, currentVideo } = useVideoContext();

  if (loading) {
    return <div>Carregando...</div>;
  }

  const featuredVideo = videos[0];

  return (
    <Main>
      {featuredVideo && <Banner video={featuredVideo} />}
      <CategoryVideos />
      {currentVideo && <UpdateForm />}
    </Main>
  );
};

const Home = () => {
  return (
    <div>
      <HomeContent />
    </div>
  );
};

export default Home;
