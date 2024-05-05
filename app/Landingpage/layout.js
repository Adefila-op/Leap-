import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Layout({ children }) {
  return (
    <div className='px-4 md:px-20 bg-black/95'>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

