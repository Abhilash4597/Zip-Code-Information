import React from 'react';

function LocationInfo({ locationInfo }) {
  return (
    <div className="location-info">
      <h2>Location Information</h2>
      <p><strong>Country:</strong> {locationInfo.country}</p>
      <p><strong>State:</strong> {locationInfo.places[0].state}</p>
      <p><strong>Place Name:</strong> {locationInfo.places[0]?.['place name']}</p>
    </div>
  );
}

export default LocationInfo;
