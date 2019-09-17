import React from 'react';
import Video from './Video';

const videoJsOptions = {
  autoPlay: false,
  controls: true,
  sources: [{
    "type": "video/mp4", 
    "src": "//vjs.zencdn.net/v/oceans.mp4"
  }],
  controlBar: {
    playToggle: {
      replay: false
    },
    volumePanel: {
      inline: false
    }
  },
  resizeManager: {
    ResizeObserver: null
  },
};


function App() {
  return (
    <div className="App">
      <h1>videojs test</h1>
      <Video {...videoJsOptions} />
    </div>
  );
}

export default App;
