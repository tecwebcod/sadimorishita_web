import { Row } from 'antd'
import MenuComponent from '../../components/menu'
import Navbar from '../../components/navbar'
import './style.css'
import { useState } from 'react'
import { Content } from 'antd/es/layout/layout'
import Titles from '../../components/titles'
import StatistcsComponent from '../../components/statistcs'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  function handleOpenMenu() {
    if (!isOpen) {
      setIsOpen(true)
      return
    }
    setIsOpen(false)
  }

  return (
    <div className='container-main-home-page'>
      <Row>
        <Navbar isOpen={isOpen} handleOpenMenu={handleOpenMenu}></Navbar>
        {isOpen && <MenuComponent handleOpenMenu={handleOpenMenu} isOpen={isOpen}></MenuComponent>}
        <Content className='content-main-home'>
          <video className='video' src='http://35.244.243.47/sm-tech-video-compactado.mp4' loop={true} autoPlay={true} muted></video>
        </Content>
      </Row>
      <Titles text={'em números'} sizeImage='120px'></Titles>
      <StatistcsComponent></StatistcsComponent>
      <Titles text={'Nossas'} textExtra={'Soluções'} color='#F3941E' sizeImage='0px'></Titles>
    </div>
  )
}