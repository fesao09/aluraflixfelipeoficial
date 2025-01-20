import Card from "./Card/Card";
import { useVideoContext } from "../Contexts/VideoContext.jsx"; // Atualizar a extensão para .jsx

// ...existing code...

const ParentComponent = () => {
  const { videos } = useVideoContext();

  return (
    <div>
      {videos.map((video) => {
        console.log("Passing video to Card:", video); // Adicionar log do objeto video
        return <Card key={video.id} video={video} />;
      })}
    </div>
  );
};

// ...existing code...

export default ParentComponent;
