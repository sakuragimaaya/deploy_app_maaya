import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

function App() {

  const [text, setText] = useState('');
  const [value, setValue] = useState('');
  const [error, setError] = useState("");

  const handleClick = () => {
    if (text === "") {
      setError("何か文字を入力して下さい")

    }
    setValue(text)
  }
  console.log(text, "chek")

  return (
    <div>
      <InputGroup className="mb-3" >
        <FormControl
          aria-describedby="basic-addonZ"
          defaultValue={value}
          onChange={e => setText(e.target.value)}
        />
        <InputGroup.Append>
          <Button variant="outlime-secondary" onClick={handleClick} >Button</Button>{value}
        </InputGroup.Append>
      </InputGroup>
      <div color="CC0000">{error}</div>
    </div >
  )
};

export default App;
