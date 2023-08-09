import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterData from './components/CharacterData';

const App = () => {
  const [data, setData] = useState([]);

  useEffect ( () => {
    axios.get('https://swapi.dev/api/people/')
    .then(res => {
      console.log(res.data);
      setData(res.data);
      console.log(data);
    }).catch(err => console.error(err))
  },[])
  return (
    <div className="App">
    {data.map(element => {return <CharacterData key={element.id} data={element}/> 
            })}
    </div>
  );
}

export default App;
