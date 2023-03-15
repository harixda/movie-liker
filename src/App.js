import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Pages from './Pages'
import Nav from './Nav'
import { FavProvider } from './context/FavContext'

function App() {
  return (
    <>
      <FavProvider>
        <BrowserRouter>
          <Nav />
          <Pages />
        </BrowserRouter>
      </FavProvider>
    </>
  )
}

export default App