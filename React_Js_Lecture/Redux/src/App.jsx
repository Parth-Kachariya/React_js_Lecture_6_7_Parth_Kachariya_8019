import React from 'react'
import DashBoard from './components/DashBoard';
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import storage from './components/storage';
const App = () => {
  return (
    <Provider store={storage}>
      <DashBoard />
      <Counter />
    </Provider>
  )
}

export default App
