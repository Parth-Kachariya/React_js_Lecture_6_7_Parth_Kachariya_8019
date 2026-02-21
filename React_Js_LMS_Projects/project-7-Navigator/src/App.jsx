import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout'

import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import Products from './Pages/Products'
import ProductDetails from './Pages/ProductDetails'
import NotFound from './Pages/NotFound'


const App = () => {
  return (
    <>
      <BrowserRouter>
            <Routes>
               <Route path='/' element={<Layout />} >
                  <Route index element={<Home />} />
                  <Route path='about' element={<About />} />
                  <Route path='contact' element={<Contact />} />
                  <Route path='services' element={<Services />} />
                  <Route path='products' element={<Products />} />
                  <Route path='products/:id' element={<ProductDetails />} />
                  <Route path='ProductDetails' element={<ProductDetails />} />
                  <Route path='*' element={<NotFound />} />
              </Route>
            </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
