import React from 'react';

function PostalCodeForm({ postalCode, setPostalCode, handleSubmit, handleClear }) {
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Enter postal code"
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
        className="input"
      />
      <button type="submit" className="button">Get Location Info</button>
      <button type="button" onClick={handleClear} className="button">Clear</button>
    </form>
  );
}

export default PostalCodeForm;
