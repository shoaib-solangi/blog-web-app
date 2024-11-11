"use client"
import React from 'react'
import Hero from './components/Hero'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PrivateRoute from '../HOC/PrivateRoute'

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
