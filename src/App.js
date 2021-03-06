import './App.css';
import News from './components/News/News';
import {React, useEffect, useState } from 'react';

function App() {
  const [articles, setArticles] = useState([]);
  useEffect( () => {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=2c4cace89fae451eb6cf0424a5f4456a';
    fetch(url)
    .then(res => res.json())
    .then(data => setArticles(data.articles))
  }, [])
  return (
    <div className="shownews">
      {
        articles.map(article => <News article={article}></News>)
      }
    </div>
  );
}

export default App;
