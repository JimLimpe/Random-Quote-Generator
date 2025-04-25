import { useState, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import quotes from './components/quotebank.js'


function App() {
  const [quote, setQuote] = useState({}); // state  as an empty object

  const generateQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]; //random quote
    setQuote(randomQuote);
  };

  useEffect(() => {
    generateQuote();
  }, []); // triggering the first quote on page load (something similar with window.onload on JS)
  return (
    <div id="quote-box" className="container-fluid">
      <h1>Inspiring Quotes</h1>
      <h2 id="text">{quote.quote}</h2>
      <h4 id="author">— {quote.writer}</h4>
      <div className="button-img-wrapper">
        <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(quote.quote + ' — ' + quote.writer)}`} target="_blank" rel="noreferrer">
          <img id="xlogo"  src={${import.meta.env.BASE_URL}xlogo.png} alt="Tweet this quote" />
        </a>
        <button className="btn btn-primary me-2" id="new-quote" onClick={generateQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;
