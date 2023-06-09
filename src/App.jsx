import { useEffect } from 'react'
import {useMIDI, useMIDINote, useMIDIControl } from '@react-midi/hooks'
import Pads from './Pads'

function App() {
  const { inputs, outputs, hasMIDI } = useMIDI()

  let inputsCheck = true

  useEffect(() => {
    if(inputs.length < 1 ) {
      inputsCheck = false
    }
  },[])

  const event = useMIDINote(inputs[0], { channel: 1 })
  const control = useMIDIControl(inputs[0], { channel: 1})

  if(!event) {
    return <div>Waiting for note</div>
  }



  const { on, note, velocity, channel } = event

  return (
    <div className="App">
      <h1>Midi Drum Machine</h1>
      <p>{inputsCheck ? 'No Midi Inputs Detected' : ''}</p>
      <div>
        Note { note } { on ? 'on' : 'off' } ({ velocity }) on channel {channel}
      </div>
      <div>Value: {control.value} Control: {control.control}</div>

      <Pads />
    </div>
  );
}

export default App;
