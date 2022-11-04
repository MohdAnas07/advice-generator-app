
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState({})

  const getData = async () => {
    const res = await axios.get('https://api.adviceslip.com/advice')
    setQuote(res.data.slip)
  }

  useEffect(() => {
    getData()
  }, [])

  const handleAdvice = () => {
    getData()
  }


  return (
    <div className="app">
      <div className="main-container">
        {
          quote &&
          <div className="content-box">
            <span className="quote-no"> ADVICE  #{quote.id} </span>
            <p className='quote'> "{quote.advice}"</p>
            <img className='divider' src="./images/pattern-divider-mobile.svg" alt="" />
            <div onClick={handleAdvice} className="quote-button">
              <img className="btn" src="./images/icon-dice.svg" alt="" />
            </div>
          </div>
        }

      </div>
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" >Frontend Mentor</a>.
        Coded by <a href="https://github.com/MohdAnas07"> Mohd Anas</a>.
      </div >
    </div>


  );
}

export default App;
