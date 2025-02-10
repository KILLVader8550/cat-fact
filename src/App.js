import { useState } from 'react';
import './App.css';

async function getData () {
  const response = await fetch('https://catfact.ninja/fact')
  const data = await response.json()
  return data
}




function App() {
  const [fact, setFact] = useState('');
  
  async function fetchFact() {
    const catFcat =  await getData();
    setFact(catFcat.fact);
  }
  fetchFact();

  return (
    <div className='container'>
      <div className='cat-fact'>{fact}</div>
      <button id='new'>New</button>
    </div>
    
  )
}

export default App;
