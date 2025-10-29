import React, { useEffect, useState } from 'react'
import axios from 'axios'

const API_endpoint = 'https://api.openweathermap.org/data/2.5/weather?'
const API_key = 'fc5606688ac07a159e9c6883ca474a93'

const Wdr = () => {
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [responseData, setResponseData] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude)
          setLongitude(position.coords.longitude)
        })
    } else {
      setError('Geolocation not supported by this browser.')
    }
  }, [])

  useEffect(() => {
    if (latitude && longitude) {
      const finalAPIendpoint = `${API_endpoint}lat=${latitude}&lon=${longitude}&appid=${API_key}&units=metric`
      axios
        .get(finalAPIendpoint)
        .then((response) => {
          setResponseData(response.data)
        })
        .catch(() => setError('Failed to fetch weather data.'))
    }
  }, [latitude, longitude])

  return (
    <div className="weather-container">
      {error && <p className="error">{error}</p>}
      {responseData ? (
        <div className="weather-card">
          <h2>{responseData.name}</h2>
          <p>Temperature: {responseData.main.temp} °C</p>
          <p>Humidity: {responseData.main.humidity} %</p>
          <p>Condition: {responseData.weather[0].description}</p>
        </div>
      ) : (
        !error && <p>Loading weather...</p>
      )}
    </div>
  )
}

export default Wdr
