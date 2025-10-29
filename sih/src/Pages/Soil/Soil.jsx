import React from "react";
import "./Soil.css";
import { FaHandHoldingWater, FaCalendarAlt } from "react-icons/fa";

const Soil = () => {
  return (
    <div className="plan-container">
      <div className="header">
        <h1>SOIL & FERTILIZER PLAN</h1>
        <p>For: Rice - Tillering Stage</p>
      </div>

      <h2 className="section-title">SOIL HEALTH</h2>
      <div className="soil-cards">
        <div className="soil-card">
          <h3>Nitrogen</h3>
          <div className="progress-bar">
            <div className="progress medium"></div>
          </div>
          <p>MEDIUM</p>
        </div>

        <div className="soil-card">
          <h3>P</h3>
          <div className="progress-bar">
            <div className="progress high"></div>
          </div>
          <p>LOW → HIGH</p>
        </div>

        <div className="soil-card">
          <h3>pH</h3>
          <div className="ph-meter">
            <div className="ph-needle"></div>
          </div>
          <p>SLIGHTLY ACIDIC</p>
          <p>Organic matter</p>
        </div>
      </div>

      <div className="fertilizer-card">
        <h3>FERTILIZER RECOMMENDATION</h3>
        <div className="fertilizer-types">
          <div className="fert">UREA</div>
          <div className="fert">DAP</div>
        </div>
        <p>Once a week</p>
        <div className="rate">
          <FaCalendarAlt /> Application rate
        </div>
        <p>2 handfuls per plant</p>
        <div className="hand-icon">
          <FaHandHoldingWater size={30} />
        </div>
      </div>

      <div className="application-card">
        <h3>APPLICATION METHOD</h3>
        <ol>
          <li>Spread fertilizer</li>
          <li>Around plant</li>
          <li>Cover with soil</li>
        </ol>
      </div>
    </div>
  );
};

export default Soil;