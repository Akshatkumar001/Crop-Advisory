import React, { useState, useEffect } from 'react'
import './Login.css'
import ig from './Lbg.jpeg'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [name, setName] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: "ml,pa,hi,gu,bn,kn,mr,ta,te,en",
        },
        "google_translate_element"
      );
    };
  }, []);
  const handleContinue = async () => {
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/save-user', { // Point to the unified backend on port 5000
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'name': name
        })
      });

      if (response.ok) {
        localStorage.setItem("userName", name);
        navigate("/user-interface");
      } else {
        alert("Failed to save user. Please try again.");
      }
    } catch (error) {
      console.error("Error connecting to the backend:", error);
      alert("Could not connect to the server. Please try again later.");
    }
  };

  return (
    <>
      <div id='Lbdy'>
        <div id='Lcnt'>
          <div className="Lcnt" id='Lcnt1'>
            <h1>AgriVerse</h1>
          </div>
          <div className="Lcnt" id='Lcnt2'>
            <div id='Lbox'>

              <div className="lb" id='Lb1'>
                <div id='Lb11'>
                  <div id='num'>
                    <h2>Name</h2>
                  </div>
                </div>
                <div id='Lb12'>
                  <input
                    type="text"
                    placeholder='Enter Your Name'
                    id='lb12'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              <div className="lb" id='Lb2'>
                <div id='otp'>
                  <h3>OTP</h3>
                </div>
                <div id='otpN'>
                  <input type="text" />
                </div>
              </div>

              <div className="lb" id='Lb3'>
                <div id='lang'>
                  <div id='google_translate_element'></div>
                </div>
              </div>

              <div className="lb" id='Lb4'>
                <div id='btn'>
                  <button onClick={handleContinue}>Continue</button>
                </div>
              </div>

              <div className="lb" id='Lb5'>
                <div id='guest'>
                  <Link to={"/user-interface"}>
                    <button>Continue as Guest</button>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div id='image'>
          <img src={ig} alt="" id='image1'/>
        </div>
      </div>
    </>
  )
}

export default Login