import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './components/Character';

const App = () => {
  const [data, setData] = useState(null);

  useEffect ( () => {
    axios.get('https://swapi.dev/api/people/')
    .then(res => {
      let tempData = res.data;
      for (let i = 0; i < tempData.length; i++)
      {
        tempData[i].key =i+1;
      }
      setData(tempData);
    }).catch(err => console.error(err))
  },[])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
    {data && <Character data={data}></Character>}
    {console.log(data)}
    </div>
  );
}

export default App;
