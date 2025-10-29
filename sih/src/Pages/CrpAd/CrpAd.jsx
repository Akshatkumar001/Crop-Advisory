import React, { useState, useEffect } from 'react'
import './CrpAd.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

function App() {
  const [advice, setAdvice] = useState(null)
  const [temperature, setTemperature] = useState(null)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        const { latitude, longitude } = pos.coords
        const weather = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
        setTemperature(weather.data.current_weather.temperature)
        const res = await axios.post('http://localhost:5000/get-advice', { lat: latitude, lon: longitude })
        setAdvice(res.data)
      })
    }
  }, [])

  return (
    <div id='crpBdy'>
      <div id='bdy'>
        <div id='bdyH'>
        <div id='hname'>
          <h1>Crop Advisory</h1>
        </div>
        
      </div>
      
      <div id='bdyC'>
        {temperature !== null && (
          <div id='temp'>
          <p>Current Temperature: {temperature} °C</p>
          </div>
      )}
      {advice ? (
        <div id='adv'>
          {advice.crops.map((item, idx) => (
            <div key={idx} className={`advb advb-${idx}`}>
              <p className='tC'><strong>Crop:</strong> {item.crop}</p>
              <p><strong>Water:</strong> {item.water}</p>
              <p><strong>Fertilizer:</strong> {item.fertilizer}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading advice...</p>
      )}
      </div>
      
      </div>
    </div>
  )
}

export default App
