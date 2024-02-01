// src/components/DiabetesPredictionForm.js
import React, { useState } from 'react';

const formContainerStyle = {
  backgroundColor: '#ecf0f1',
  padding: '20px',
  margin: '20px',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const predictButtonStyle = {
  backgroundColor: '#3498db',
  color: '#fff',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const DiabetesPredictionForm = () => {
  const [gender, setGender] = useState(''); // Use radio buttons or dropdown for gender
  const [age, setAge] = useState('');
  const [hypertension, setHypertension] = useState(false); // Use checkbox
  const [heartDisease, setHeartDisease] = useState(false); // Use checkbox
  const [smokingHistory, setSmokingHistory] = useState(false); // Use checkbox
  const [bmi, setBMI] = useState('');
  const [hba1cLevel, setHba1cLevel] = useState('');
  const [bloodGlucoseLevel, setBloodGlucoseLevel] = useState('');
  const [predictionResult, setPredictionResult] = useState(null);

  const handlePredictionSubmit = async (e) => {
    e.preventDefault();

    // Add logic to send parameters data to your backend for diabetes prediction
    // ...

    // Mock result for simplicity
    setPredictionResult('Positive for Diabetes');
  };

  return (
    <div style={formContainerStyle}>
      <h2>Diabetes Prediction Form</h2>
      <form onSubmit={handlePredictionSubmit}>
        <label>
          Gender:
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <label>
          Hypertension:
          <input
            type="number"
            value={hypertension}
            onChange={(e) => setHypertension(e.target.value)}
          />
        </label>
        <label>
          Heart Disease:
          <input
            type="number"
            value={heartDisease}
            onChange={(e) => setHeartDisease(e.target.value)}
          />
        </label>
        <label>
          Smoking History:
          <input
            type="number"
            value={smokingHistory}
            onChange={(e) => setSmokingHistory(e.target.value)}
          />
        </label>
        <label>
          BMI:
          <input
            type="text"
            value={bmi}
            onChange={(e) => setBMI(e.target.value)}
          />
        </label>
        <label>
          HbA1c Level:
          <input
            type="number"
            value={hba1cLevel}
            onChange={(e) => setHba1cLevel(e.target.value)}
          />
        </label>
        <label>
          Blood Glucose Level:
          <input
            type="number"
            value={bloodGlucoseLevel}
            onChange={(e) => setBloodGlucoseLevel(e.target.value)}
          />
        </label>
        <button type="submit" style={predictButtonStyle}>
          Predict
        </button>
      </form>

      {predictionResult && (
        <div>
          <h3>Prediction Result:</h3>
          <p>{predictionResult}</p>
        </div>
      )}
    </div>
  );
};

export default DiabetesPredictionForm;
