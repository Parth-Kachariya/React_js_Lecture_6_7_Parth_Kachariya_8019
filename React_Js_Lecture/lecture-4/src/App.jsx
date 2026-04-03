import React from 'react'
import Ref from './components/Ref'
import Data from './components/Data'
import Url from './components/Url'
import Cloudnary from './components/Cloudnary'

const App = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Ref/>
      <Data/>
      <Url/>
      <Cloudnary/>
    </div>
  )
}

export default App
