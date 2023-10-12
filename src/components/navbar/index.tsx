import { Col, Image, Row } from 'antd';
import './style.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { BiLogoLinkedin } from 'react-icons/bi';
import '../menu/style.css'
interface NavbarProps {
  handleOpenMenu: () => void
  isOpen: boolean
}


export default function Navbar({ handleOpenMenu,isOpen }: NavbarProps) {
  return (
    <nav className="nav-bar">
      <Row className="box-logo">
        <Image src="http://35.244.243.47/sm-barra_1.png"></Image>
      </Row>
      <Row
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '2rem',
        }}
      >
        <Col style={{ textAlign: 'center', color: '#fff' }}>
          <Row>
            <button onClick={() => {
              if (isOpen) {
                document.querySelector('.container-menu')?.classList.add('revertAnimationContainerMenu')
                document.querySelector('.menu')?.classList.add('revertAnimationMenu')
                document.querySelector('.box-btns')?.classList.add('revertAnimationBoxBtns')
                setTimeout(() => {
                  handleOpenMenu()
                }, 900);
                return
              }
              handleOpenMenu()
            }} style={{ background: 'none', border: 0 }}>
              <RxHamburgerMenu size={45} color="#fff"></RxHamburgerMenu>
            </button>
          </Row>
          <p>Menu</p>
        </Col>
      </Row>
      <Row
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '5rem',
        }}
      >
        <Col style={{ display: 'flex', flexDirection: 'column', gap: '27px' }}>
          <Row>
            <BsFacebook color="#fff" size={20}></BsFacebook>
          </Row>
          <Row>
            <BiLogoLinkedin color="#fff" size={20}></BiLogoLinkedin>
          </Row>
          <Row>
            <BsInstagram color="#fff" size={20}></BsInstagram>
          </Row>
        </Col>
      </Row>
      <Row
        style={{
          width: "50px",
          height: '50px',
          borderRadius: "50%",
          backgroundColor: "#30BE45",
          display: "grid",
          placeItems: "center",
          position: "absolute",
          bottom: "20px",
          transform: 'translate(-50% ,-50%)',
          left: '50%'
        }}
      >
        <BsWhatsapp color='#fff' size={35}></BsWhatsapp>
      </Row>
    </nav>
  );
}
