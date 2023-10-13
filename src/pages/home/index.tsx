import { Row } from 'antd'
import './style.css'
import { Content } from 'antd/es/layout/layout'
import Titles from '../../components/titles'
import StatistcsComponent from '../../components/statistcs'
import CarrusselSolutions from '../../components/carrusselSolutions'

export default function Home() {


  return (
    <div className='container-main-home-page'>
      <Row>
        <Content className='content-main-home'>
          <video className='video' src='http://35.244.243.47/sm-tech-video-compactado.mp4' loop={true} autoPlay={true} muted></video>
        </Content>
      </Row>
      <Titles text={'em números'} sizeImage='120px'></Titles>
      <StatistcsComponent></StatistcsComponent>
      <Titles text={'Nossas'} textExtra={'Soluções'} color='#F3941E' sizeImage='0px'></Titles>
      <CarrusselSolutions></CarrusselSolutions>

    </div>
  )
}