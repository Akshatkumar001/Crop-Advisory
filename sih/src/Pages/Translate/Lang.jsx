import React from 'react'
import './Lang.css'
import { useEffect } from 'react'

const Lang = () => {
    useEffect(() => {
  const script = document.createElement('script');
  script.src ="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

  document.body.appendChild(script);

  window.googleTranslateElementInit= () =>{
    new google.translate.TranslateElement(
    {
        pageLanguage: 'en',
        includedLanguages: "ml,hi,gu,bn,kn,mr,ta,te,en",
    },
    "google_translate_element"
  );
  };
}, []);

  return (
    <>
    <div id='google_translate_element'></div>
    </>
  )
}

export default Lang