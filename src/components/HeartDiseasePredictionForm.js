// src/components/HeartDiseasePredictionForm.js
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

const HeartDiseasePredictionForm = () => {
  const [id, setId] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState(''); // Use radio buttons or dropdown for gender
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [ap_hi, setApHi] = useState('');
  const [ap_lo, setApLo] = useState('');
  const [cholesterol, setCholesterol] = useState('');
  const [glucoseLevel, setGlucoseLevel] = useState('');
  const [smokingHabit, setSmokingHabit] = useState(''); // Use radio buttons or dropdown
  const [alcohol, setAlcohol] = useState(''); // Use radio buttons or dropdown
  const [active, setActive] = useState(''); // Use radio buttons or dropdown
  const [predictionResult, setPredictionResult] = useState(null);

  const handlePredictionSubmit = async (e) => {
    e.preventDefault();

    // Add logic to send parameters data to your backend for heart disease prediction
    // ...

    // Mock result for simplicity
    setPredictionResult('Positive for Heart Disease');
  };

  return (
    <div style={formContainerStyle}>
      <h2>Heart Disease Prediction Form</h2>
      <form onSubmit={handlePredictionSubmit}>
        <label>
          ID:
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
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
          Height:
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
        <label>
          Weight:
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
        <label>
          Systolic Blood Pressure (ap_hi):
          <input
            type="number"
            value={ap_hi}
            onChange={(e) => setApHi(e.target.value)}
          />
        </label>
        <label>
          Diastolic Blood Pressure (ap_lo):
          <input
            type="number"
            value={ap_lo}
            onChange={(e) => setApLo(e.target.value)}
          />
        </label>
        <label>
          Cholesterol:
          <input
            type="number"
            value={cholesterol}
            onChange={(e) => setCholesterol(e.target.value)}
          />
        </label>
        <label>
          Glucose Level:
          <input
            type="number"
            value={glucoseLevel}
            onChange={(e) => setGlucoseLevel(e.target.value)}
          />
        </label>
        <label>
          Smoking Habit:
          {/* Use radio buttons or dropdown */}
          <input
            type="text"
            value={smokingHabit}
            onChange={(e) => setSmokingHabit(e.target.value)}
          />
        </label>
        <label>
          Alcohol:
          {/* Use radio buttons or dropdown */}
          <input
            type="text"
            value={alcohol}
            onChange={(e) => setAlcohol(e.target.value)}
          />
        </label>
        <label>
          Active:
          {/* Use radio buttons or dropdown */}
          <input
            type="text"
            value={active}
            onChange={(e) => setActive(e.target.value)}
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

export default HeartDiseasePredictionForm;
