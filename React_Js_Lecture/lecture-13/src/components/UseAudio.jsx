import React from 'react'
import audio from '../assets/audio.mp3'
import { useRef , useState } from 'react'

const UseAudio = () => {

  const [isPlaying , setIsPlaying] = useState(false)

  const audioRef = useRef(null)

  const playAudio = () => {
    audioRef.current.play()
  }

  const pauseAudio = () => {
    audioRef.current.pause()
  }

  const toggleAudio = () => {
    if(isPlaying){
      audioRef.current.pause()
    }else{
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }



  return (
    <div className='mt-8'>
      <audio className='' ref={audioRef} controls src={audio}></audio>
      <button className='px-8 py-4 bg-indigo-500 ms-2 text-xl font-semibold rounded-xl mt-2' onClick={toggleAudio}>{isPlaying ? "Pause" : "Play"}</button>
      <button className='px-8 py-4 bg-indigo-500 ms-2 text-xl font-semibold rounded-xl mt-2' onClick={playAudio}>play</button>
      <button className='px-8 py-4 bg-indigo-500 ms-2 text-xl font-semibold rounded-xl mt-2' onClick={pauseAudio}>pause</button>
    </div>
  )
}

export default UseAudio