import { BsLinkedin } from 'react-icons/bs'
import Titles from '../titles'
import './style.css'
import { Col, Row } from 'antd'
import { BiLogoLinkedin } from 'react-icons/bi'

export default function SquadSM() {

    const socios = [
        {
            id: 1,
            name: 'Guilherme sadi',
            image: "http://35.244.243.47/Guilherme-Time.jpeg",
            function: 'Sócio',
            redes: [
                {
                    linkedin: "",
                    icon: <BiLogoLinkedin color="#000" size={20}></BiLogoLinkedin>

                },
                {
                    email: "",
                    icon: <BsLinkedin></BsLinkedin>
                },
                {
                    moreIformations: "",
                    icon: <BsLinkedin></BsLinkedin>
                }
            ]
        },
        {
            id: 2,
            name: 'Mauricio morishita',
            image: "http://35.244.243.47/Mauricio-time-1.jpg",
            function: 'Sócio',
            redes: [
                {
                    linkedin: "",
                    icon: <BiLogoLinkedin color="#000" size={20}></BiLogoLinkedin>

                },
                {
                    email: "",
                    icon: <BsLinkedin></BsLinkedin>
                },
                {
                    moreIformations: "",
                    icon: <BsLinkedin></BsLinkedin>
                }
            ]
        }
    ]


    return (
        <div className="container-squad-sm">
            <div className="squad-sm-text">
                <Titles fontSize='70px' text={'Time'} sizeImage='150px' direction='row-reverse'></Titles>
                <h1 style={{ width: "670px", color: "#343953", textAlign: "justify", fontSize: '1.4vw', wordSpacing: "2px", letterSpacing: "2px", fontFamily: "montserrat,Sans-serif" }}>
                    Somos uma equipe especializada em parcerias de negócios, mas, acima de tudo, somos pessoas reais que transformam ideias em realidade.
                </h1>
                <button className='btn-conheca-nosso-time'>Conheça nosso time!</button>
            </div>
            <div className="squad-sm-ceos">
                <button onClick={() => {
                    const element = document.querySelector('.squad-sm-box-socios')
                    element?.scrollTo({
                        left: 0,
                        behavior: "smooth"
                    })
                }} className='btn-prev'><img width="50" height="50" src="https://img.icons8.com/ios/50/back--v1.png" alt="back--v1" /></button>
                <button onClick={() => {
                    const element = document.querySelector('.squad-sm-box-socios')
                    element?.scrollTo({
                        left: 600,
                        behavior: "smooth"
                    })
                }} className='btn-next'><img width="50" height="50" src="https://img.icons8.com/ios/50/forward--v1.png" alt="forward--v1" /></button>
                <div className="squad-sm-box-socios">
                    {
                        socios.map((socios) => {
                            return (
                                <div style={{ width: '300px' }}>
                                    <div key={socios.id} className="socio">
                                        <img width={'300px'} style={{ borderRadius: "40px" }} src={socios?.image} alt="" />
                                        <h1 style={{ color: "#343953" }}>{socios?.name}</h1>
                                        <p style={{ fontSize: "20px", color: 'grey', marginBottom: "10px" }}>{socios?.function}</p>
                                        <Row>
                                            {
                                                socios?.redes?.map((rede, index) => {
                                                    return (
                                                        <Row key={index}>
                                                            <Col>
                                                                {rede?.icon}
                                                            </Col>
                                                        </Row>
                                                    )
                                                })
                                            }
                                        </Row>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}