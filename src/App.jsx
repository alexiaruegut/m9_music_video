import React from 'react';
import MediaPlayer from './components/MediaPlayer';
import Header from './components/Header';

function App() {
  return (
    <div className="App bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen">
      <Header />
      <div className="flex items-center min-h-[calc(100vh-64px)]">
        <div className="w-1/2 flex justify-center items-center p-2">
          <div className="w-full">
            <h2 className="text-white text-center">Video of Mohammed Kasmi in Pixabay</h2>
            <MediaPlayer type="video" src="/media/MK - Sea.mp4" />
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center p-2">
          <div className="w-full">
            <h2 className="text-white text-center">Got a Feeling by Zane Little - CC0 1.0</h2>
            <MediaPlayer type="audio" src="/media/Zane Little - Got a Feeling.mp3" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Got a Feeling by Zane Little is licensed under a CC0 1.0 Universal License.
// Video of Mohammed Kasmi in Pixabay.
export default App;
