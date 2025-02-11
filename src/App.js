import { useState, useEffect, useRef } from 'react';
import './App.css';

async function getData () {
  const response = await fetch('https://catfact.ninja/fact')
  const data = await response.json();
  return data;
}

function App() {
  const [fact, setFact] = useState('');
  const hasFetched = useRef(false)

  async function fetchFact() {
    const catFcat =  await getData();
    setFact(catFcat.fact);
  }
  
  useEffect(() => {
    if (!hasFetched.current) {
      fetchFact();
      hasFetched.current = true;
    }
  },[]);
  
  return (
    <div className='container'>
      <div className='cat-fact'>{fact}</div>
      <button id='new' onClick={fetchFact}>New</button>
    </div>
  )
}

export default App;
