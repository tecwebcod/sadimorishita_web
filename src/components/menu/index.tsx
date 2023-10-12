import { Col, Row } from 'antd'
import './style.css'
import { Link } from 'react-router-dom'

interface MenuProps {
    isOpen: boolean
    handleOpenMenu: () => void
}


export default function MenuComponent({ isOpen, handleOpenMenu }: MenuProps) {
    function handle() {
        if (isOpen) {
            document.querySelector('.container-menu')?.classList.add('revertAnimationContainerMenu')
            document.querySelector('.menu')?.classList.add('revertAnimationMenu')
            document.querySelector('.box-btns')?.classList.add('revertAnimationBoxBtns')
            setTimeout(() => {
                handleOpenMenu()
            }, 900);
            return
        }
    }
    return (
        <div className='container-menu' >
            <div className="menu">
                <Row className='box-close-btn-menu'>
                    <button onClick={handle} style={{ background: 'none', border: "0", }}>
                        <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/ffffff/multiply.png" alt="multiply" />
                    </button></Row>
                <Col className='box-btns'>
                    <Row style={{ flexWrap: 'nowrap' }}><Link className='btn-menu' to={''}>Sobre o SM</Link></Row>
                    <Row style={{ flexWrap: 'nowrap' }}><Link className='btn-menu' to={''}>Nossas soluções</Link></Row>
                    <Row style={{ flexWrap: 'nowrap' }}><Link className='btn-menu' to={''}>Laboratório de inovação</Link></Row>
                    <Row style={{ flexWrap: 'nowrap' }}><Link className='btn-menu' to={''}>Nosso time</Link></Row>
                    <Row style={{ flexWrap: 'nowrap' }}><Link className='btn-menu' to={''}>Na mídia</Link></Row>
                    <Row style={{ flexWrap: 'nowrap' }}><Link className='btn-menu' to={''}>Podcast</Link></Row>
                    <Row style={{ flexWrap: 'nowrap' }}><Link className='btn-menu' to={''}>Contate-nos</Link></Row>
                </Col>
            </div>
            <div className="placeForOnclick" onClick={handle}></div>
        </div>
    )
}