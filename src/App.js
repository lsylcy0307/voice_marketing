import React from 'react';
import './App.css';
import AudioRecorder from './components/AudioRecorder';
import Header from './components/Header';
import MainLayout from './components/MainLayout';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainLayout>
        <AudioRecorder />
      </MainLayout>
      <Footer />
    </div>
  );
}

export default App;
