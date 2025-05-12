import React from 'react';
import './App.css';
import AudioRecorder from './components/AudioRecorder';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Interactive Research Demo</h1>
        <p>Explore item purchase likelihood using voice input</p>
      </header>
      <main>
        <AudioRecorder />
      </main>
    </div>
  );
}

export default App;
