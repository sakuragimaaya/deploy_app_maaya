import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

function App() {
  const [hand, setHand] = useState('');
  const [tee, setTee] = useState("")
  const [jajji, setJajji] = useState("")
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    gamehand()
  }, [counter])

  const guuClick = () => {
    setHand("ぐー")
    cpuhand()
  }

  const chokiClick = () => {
    setHand("ちょき")
    cpuhand()

  }
  const paaClick = () => {
    setHand("ぱー")
    cpuhand()

  }
  const cpuhand = () => {
    const num = Math.floor(Math.random() * 3)
    console.log(num)
    if (num === 0) {
      setTee("ぐー")
    } else if (num === 1) {
      setTee("ちょき")
    } else {
      setTee("ぱー")
    }
    setCounter(prev => prev + 1)
  }
  const gamehand = () => {
    if (hand === tee) {
      setJajji("あいこです")
    } else if (hand === 'ぐー' && tee === "ちょき") {
      setJajji("あなたの勝ちです")
    }
    else if (hand === 'ぐー' && tee === "ぱー") {
      setJajji("あなたの負けです")
    }
    else if (hand === 'ぱー' && tee === "ちょき") {
      setJajji("あなたの負けです")
    }
    else if (hand === 'ぱー' && tee === "ぐー") {
      setJajji("あなたの勝ちです")
    }
    else if (hand === 'ちょき' && tee === "ぐー") {
      setJajji("あなたの負けです")
    }
    else if (hand === 'ちょき' && tee === "ぱー") {
      setJajji("あなたの勝ちです")
    }

  }


  return (
    <div>
      <button onClick={guuClick}  >ぐー</button>
      <button onClick={chokiClick} >ちょき</button>
      <button onClick={paaClick} >ぱー</button>
      <h3>あなたの手：{hand}</h3>
      <h3>cpuの手：{tee}</h3>
      <h3>判定中：{jajji}</h3>

    </div >
  )
};

export default App;
