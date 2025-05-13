import React, { useState, useRef, useEffect } from 'react';
import PredictionResults from './PredictionResults';
import './AudioRecorder.css';

const AudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [timer, setTimer] = useState(0);
  const [audioUrl, setAudioUrl] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [prediction, setPrediction] = useState(null);
  const timerRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  useEffect(() => {
    if (isRecording) {
      timerRef.current = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isRecording]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];
      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };
      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
      };
      mediaRecorderRef.current.start();
      setIsRecording(true);
      setTimer(0);
    } catch (err) {
      console.error('Error accessing microphone:', err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const handleSubmit = async () => {
    if (!audioUrl) return;
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append('audio', new Blob(audioChunksRef.current, { type: 'audio/wav' }), 'recording.wav');
      
      const response = await fetch('http://voice-marketing-backend-one.vercel.app/api/predict', {
        method: 'POST',
        body: formData,
      });
      
      const data = await response.json();
      console.log(data);
      setPrediction(data);
    } catch (err) {
      console.error('Error submitting audio:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="audio-recorder">
      <h2>Audio Recording Interface</h2>
      {!isRecording ? (
        <button onClick={startRecording}>🎙️ Record Audio</button>
      ) : (
        <button onClick={stopRecording}>Stop</button>
      )}
      {isRecording && <p>Recording: {timer} seconds</p>}
      {audioUrl && (
        <div>
          <audio src={audioUrl} controls />
          <button onClick={handleSubmit} disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      )}
      <PredictionResults prediction={prediction} />
    </div>
  );
};

export default AudioRecorder; 