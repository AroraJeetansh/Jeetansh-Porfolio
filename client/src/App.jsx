import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Portfolio from './pages/Portfolio'
import { portfolioData } from './data/portfolioData'

function App() {
  const [theme, setTheme] = useState('light')

  return (
    <div className={`page ${theme === 'dark' ? 'dark' : 'light'}`}>
      <Header
        contacts={portfolioData.contacts}
        theme={theme}
        setTheme={setTheme}
      />
      <Portfolio data={portfolioData} />
      <Footer />
    </div>
  )
}

export default App

