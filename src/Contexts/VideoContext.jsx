import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  getVideos,
  saveVideo as addVideoService,
  deleteVideo as deleteVideoService,
  updateVideo as updateVideoService,
} from "../Services/api";

const VideoContext = createContext();

export const useVideoContext = () => useContext(VideoContext);

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videoData = await getVideos();
        setVideos(videoData);
        setLoading(false);
      } catch (error) {
        console.error("Error ao buscar videos", error);
        setLoading(false);
      }
    };
    fetchVideos();

    const savedVideos = JSON.parse(localStorage.getItem('videos')) || [];
    setVideos(savedVideos);
  }, []);

  const addVideo = async (newVideo) => {
    try {
      const addedVideo = await addVideoService(newVideo);
      const updatedVideos = [...videos, addedVideo];
      setVideos(updatedVideos);
      localStorage.setItem('videos', JSON.stringify(updatedVideos));
    } catch (error) {
      console.error("Erro ao adicionar vídeo", error);
    }
  };

  const deleteVideo = async (videoId) => {
    try {
      await deleteVideoService(videoId);
      setVideos((prevVideos) =>
        prevVideos.filter((video) => video.id !== videoId)
      );
    } catch (error) {
      console.error("Erro ao deletar video", error);
    }
  };

  const updateVideo = async (videoId, updatedVideo) => {
    try {
      const updatedData = await updateVideoService(videoId, updatedVideo);
      setVideos((prevVideos) =>
        prevVideos.map((video) =>
          video.id === videoId ? { ...video, ...updatedData } : video
        )
      );
    } catch (error) {
      console.error("Erro ao atualizar vídeo", error);
    }
  };

  const openUpdateForm = (video) => {
    setCurrentVideo(video);
    // Lógica para abrir o formulário de atualização
    console.log("Abrir formulário de atualização para o vídeo:", video);
  };

  const closeUpdateForm = () => {
    setCurrentVideo(null);
  };

  const videoCategory = {};

  videos.forEach((video) => {
    const category = video.categoria;
    if (!videoCategory[category]) {
      videoCategory[category] = [];
    }
    videoCategory[category].push(video);
  });

  return (
    <VideoContext.Provider
      value={{
        videos,
        loading,
        videoCategory,
        addVideo,
        deleteVideo,
        updateVideo,
        openUpdateForm,
        closeUpdateForm,
        currentVideo,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
