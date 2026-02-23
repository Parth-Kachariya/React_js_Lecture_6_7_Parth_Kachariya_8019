import React from 'react'
import store from './components/storage'
import { Provider } from 'react-redux';
import DashBoard from './components/DashBoard';
import Counter from './components/Counter';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <DashBoard />
      </Provider>
    </>
  )
  
}

export default App
