import React from 'react'
import Header from '../components/Header'
import Hero from './components/Hero'
import PrivateRoute from '../HOC/PrivateRoute'
import Footer from '../components/Footer'

function page() {
  return (
    <PrivateRoute>
    <div>
      <Header />
      <Hero />
      <Footer />
    </div>

    </PrivateRoute>
  )
}

export default page
