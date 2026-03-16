import React from 'react'
import './App.css'
import Layout from './components/Layout'
import { useAuth0 } from '@auth0/auth0-react'

const App = () => {

  const {isAuthenticated , loading , error , loginWithRedirect , logout , loginWithPopup} = useAuth0()

  console.log(isAuthenticated);
  console.log(loading);

  return (
    <Layout/>
  )
}

export default App