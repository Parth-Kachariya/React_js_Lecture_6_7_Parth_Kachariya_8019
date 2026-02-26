import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import { storage } from './components/storage'
import Counter from './components/Counter'

const App = () => {
  return (
    <Provider store={storage}>
        <Counter/>
    </Provider>
  )
}

export default App