import React, { useEffect, useState } from 'react';
import "./App.css";
import { quotesData } from './data';

const Quotes = () => {
  const [quote, setQuote] = useState();

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const fetchRandomQuote = () => {
    const keys = Object.keys(quotesData);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const randomQuote = quotesData[randomKey];
    setQuote(randomQuote);
  };
  
  return (
        <div className="quote-content">
          <h3>{quote}</h3>
        </div>

  );
};

export default Quotes;
