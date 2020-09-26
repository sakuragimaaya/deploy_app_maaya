import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://qiita.com/api/v2/items')
      .then(res => setData(res.data))
  }, [])

  return (
    <div>
      {
        data.map((d, index) => { return (<div key={index}>{d.title}</div>) })}
    </div>
  )
}


export default App;