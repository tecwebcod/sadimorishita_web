import { BrowserRouter } from 'react-router-dom'
import './App.css'
import RouterApp from './routes/routes'
import Navbar from './components/navbar'
import MenuComponent from './components/menu'
import { useState } from 'react'

function App() {

  const [isOpen, setIsOpen] = useState(false)

  function handleOpenMenu() {
    if (!isOpen) {
      setIsOpen(true)
      return
    }
    setIsOpen(false)
  }

  return (
    <BrowserRouter>
      <Navbar isOpen={isOpen} handleOpenMenu={handleOpenMenu}></Navbar>
      {isOpen && <MenuComponent handleOpenMenu={handleOpenMenu} isOpen={isOpen}></MenuComponent>}

      <RouterApp></RouterApp>
    </BrowserRouter>
  )
}

export default App
