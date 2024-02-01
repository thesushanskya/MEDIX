// src/App.js
import React from 'react';
import Header from './components/Header';
import DiabetesPredictionForm from './components/DiabetesPredictionForm';
import HeartDiseasePredictionForm from './components/HeartDiseasePredictionForm';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <DiabetesPredictionForm />
        <HeartDiseasePredictionForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
