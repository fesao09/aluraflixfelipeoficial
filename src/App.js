import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import NewVideo from './Pages/NewVideo/NewVideo.jsx';
import { VideoProvider } from './Contexts/VideoContext.jsx';

// ...existing code...

const App = () => {
  const [isNewVideoVisible, setIsNewVideoVisible] = useState(false);

  const toggleNewVideo = () => {
    setIsNewVideoVisible(!isNewVideoVisible);
  };

  return (
    <VideoProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/new-video" component={NewVideo} />
          </Switch>
          <button onClick={toggleNewVideo}>New Vídeo</button>
          {isNewVideoVisible && (
            <div className="new-video-modal">
              {/* Conteúdo da tela de New Vídeo */}
            </div>
          )}
        </div>
      </Router>
    </VideoProvider>
  );
};

export default App;
