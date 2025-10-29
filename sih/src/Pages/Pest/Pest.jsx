import React, { useState } from "react";
import "./Pest.css";

const Pest = () => {
  const [result, setResult] = useState(null);

  // Mock detection result (replace with backend API fetch later)
  const detectPest = () => {
    setResult({
      pest: "Stem Borer",
      confidence: 95,
      organic: "Apply neem oil spray",
      chemical: "Use Chlorpyrifos",
      dosage: "5 ml per liter of water",
      image:
        "https://images.unsplash.com/photo-1716929158041-be1924e71a83?ixlib=rb-4.1.0&q=80&w=200",
    });
  };

  return (
    <div className="pest-container">
      <div className="upload-box" onClick={detectPest}>
        <div className="icon-box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
        <p className="upload-text">Take Photo or Upload</p>
      </div>

      {result && (
        <div className="result-card">
          <img
            src="https://images.unsplash.com/photo-1692481060581-98c224124f12?ixlib=rb-4.1.0&q=80&w=600"
            alt="Detected plant issue"
            className="result-img"
          />

          <div className="result-content">
            <div className="result-header">
              <div className="result-title">
                <img
                  src={result.image}
                  alt={result.pest}
                  className="thumb-img"
                />
                <span className="pest-name">{result.pest}</span>
              </div>
              <div className="confidence">
                <span>{result.confidence}%</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-red-500 ml-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                </svg>
              </div>
            </div>

            <div className="treatment-tabs">
              <div className="tab active">Organic</div>
              <div className="tab">Chemical</div>
            </div>

            <div className="treatment-info">
              <p className="treatment">{result.organic}</p>
              <p className="dosage">{result.dosage}</p>
            </div>
          </div>
        </div>
      )}

      <div className="ask-ai-btn">
        <span>Ask AI</span>
      </div>
    </div>
  );
};

export default Pest;