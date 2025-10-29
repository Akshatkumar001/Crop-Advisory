import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CrpAd = () => {
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdvice = async (lat, lon) => {
      try {
        setLoading(true);
        setError(null);
        // Make sure your backend is running on port 5000
        const response = await axios.post('http://localhost:5000/api/get-advice', { lat, lon });
        setCrops(response.data.crops);
      } catch (err) {
        console.error("Error fetching crop advice:", err);
        setError('Failed to fetch crop advice. Please ensure the backend server is running and accessible.');
      } finally {
        setLoading(false);
      }
    };

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            fetchAdvice(position.coords.latitude, position.coords.longitude);
          },
          (err) => {
            console.error("Error getting location:", err);
            setError('Unable to retrieve your location. Please enable location services in your browser.');
            setLoading(false);
          }
        );
      } else {
        setError("Geolocation is not supported by this browser.");
        setLoading(false);
      }
    };

    getLocation();
  }, []);

  if (loading) {
    return <div>Loading crop recommendations...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="crop-advice-container">
      <h2>Recommended Crops for Your Location</h2>
      {crops.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Crop</th>
              <th>Water Requirement</th>
              <th>Fertilizer Advice</th>
            </tr>
          </thead>
          <tbody>
            {crops.map((crop, index) => (
              <tr key={index}>
                <td>{crop.crop}</td>
                <td>{crop.water}</td>
                <td>{crop.fertilizer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No crop recommendations available at the moment.</p>
      )}
    </div>
  );
};

export default CrpAd;
