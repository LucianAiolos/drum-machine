import { useEffect } from 'react'
import Hit1 from './sounds/hit1.wav'
import Hit2 from './sounds/hit2.wav'
import { useMIDI, useMIDINote } from '@react-midi/hooks'

function Pads() {
  const { inputs } = useMIDI()
  const event = useMIDINote( inputs[0], { channel: 1 })

  const pads  = {
    one: Hit1,
    two: Hit2,
  }
  
  const play = (s) => {
    new Audio(s).play()
  }
  

  useEffect(() => {
    if(event) {
      console.log(event)
      if(event.note === 72 && event.on === true) {
        play(Hit1)
      }
    }
  }, [event])

  return (
    <div className='pads-container'>
      <div 
        className='pad pad-1' 
        onClick={()=> play(Hit1)}

      >1</div>
      <div className='pad active' onClick={()=> play(Hit2)}>2</div>
      <div className='pad'>3</div>
      <div className='pad'>4</div>
    </div>
  )
}

export default Pads
