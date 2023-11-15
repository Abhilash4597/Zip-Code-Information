import React, { useState } from 'react';
import './App.css';
import PostalCodeForm from './Components/PostalCodeForm';
import LocationInfo from './Components/LocationInfo';

function App() {
  const [postalCode, setPostalCode] = useState('');
  const [locationInfo, setLocationInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(`https://api.zippopotam.us/in/${postalCode}`);
      if (!response.ok) {
        throw new Error('Postal code not found');
      }
      const data = await response.json();
      setLocationInfo(data);
      setError('');
    } catch (err) {
      setLocationInfo(null);
      setError('Failed to fetch location information. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setPostalCode('');
    setLocationInfo(null);
    setError('');
  };

  return (
    <div className="App">
      <header>
        <h1 className="title">Zip Code Information App</h1>
      </header>
      <main>
        <PostalCodeForm
          postalCode={postalCode}
          setPostalCode={setPostalCode}
          handleSubmit={handleSubmit}
          handleClear={handleClear}
        />

        {isLoading && <p className="loading">Loading...</p>}
        {error && <p className="error">{error}</p>}
        {locationInfo && <LocationInfo locationInfo={locationInfo} />}
      </main>
      <footer>
        <p>Developed by Abhilash Singh</p>
      </footer>
    </div>
  );
}

export default App;
