import logo from './logo.png'
import React from 'react'
import './App.css'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Open Banking</p>
      </header>
      <body>
        <p>{`${process.env.NODE_ENV}: ${process.env.REACT_APP_TEST}`}</p>
      </body>
    </div>
  )
}

export default App
