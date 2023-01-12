import React from 'react'
import ReactDOM from 'react-dom/client'
import Image from './Image'
import Header from './Header'
import Button from './Button'
import About from './About'
import Footer from './Footer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <Image/>
    <Header/>
    <Button/>
    <About/>
    <Footer/>
  </div>
)
