import { useEffect } from 'react'
import {useMIDI, useMIDINote } from '@react-midi/hooks'

function App() {
  const { inputs, outputs, hasMIDI } = useMIDI()

  let inputsCheck = true

  useEffect(() => {
    if(inputs.length < 1 ) {
      inputsCheck = false
    }
  },[])


  console.log(inputs, outputs, hasMIDI)
  return (
    <div className="App">
      <h1>Midi Drum Machine</h1>
      <p>{inputsCheck ? 'No Midi Inputs Detected' : ''}</p>
    </div>
  );
}

export default App;
