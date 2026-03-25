import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col">

      <Navbar />

      <main className="  pt-20">
        <Outlet />
      </main>

      <Footer />

    </div>
  )
}

export default Layout
