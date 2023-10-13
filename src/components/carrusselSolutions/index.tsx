import { Row, Typography } from 'antd'
import './style.css'


export default function CarrusselSolutions() {
    return (
        <Row className='container-carrussel'>
            <div>
                <div className="box-carrussel">
                    <Row style={{ width: "110px", height: '110px', border: "3px solid #fff", borderRadius: "50%", display: "grid", placeItems: "center" }}>
                        <img width="80" height="80" src="https://img.icons8.com/sf-ultralight/100/ffffff/bank-card-back-side.png" alt="bank-card-back-side" />
                    </Row>
                    <Row><Typography.Title level={2} style={{ color: "#fff", textAlign: 'center' }}>Crimes e Fraudes digitais</Typography.Title></Row>
                </div>
            </div>
            <div>
                <div className="box-carrussel">
                    <Row style={{ width: "110px", height: '110px', border: "3px solid #fff", borderRadius: "50%", display: "grid", placeItems: "center" }}>
                        <img width="80" height="80" src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/96/ffffff/external-house-recession-tanah-basah-basic-outline-tanah-basah.png" alt="external-house-recession-tanah-basah-basic-outline-tanah-basah" />                    </Row>
                    <Row><Typography.Title level={2} style={{ color: "#fff", textAlign: 'center' }}>Imobiliário</Typography.Title></Row>
                </div>
            </div>
            <div>
                <div className="box-carrussel">
                    <Row style={{ width: "110px", height: '110px', border: "3px solid #fff", borderRadius: "50%", display: "grid", placeItems: "center" }}>
                        <img width="70" height="70" src="https://img.icons8.com/ios/50/ffffff/security-shield-green.png" alt="security-shield-green" />                    </Row>
                    <Row><Typography.Title level={2} style={{ color: "#fff", textAlign: 'center' }}>LGPD e Serviços de DPO</Typography.Title></Row>
                </div>
            </div>
            <div>
                <div className="box-carrussel">
                    <Row style={{ width: "110px", height: '110px', border: "3px solid #fff", borderRadius: "50%", display: "grid", placeItems: "center" }}>
                        <img width="50" height="50" src="https://img.icons8.com/ios/50/000000/security-shield-green.png" alt="security-shield-green" />                    </Row>
                    <Row><Typography.Title level={2} style={{ color: "#fff", textAlign: 'center' }}>Crimes e Fraudes digitais</Typography.Title></Row>
                </div>
            </div>
            <div>
                <div className="box-carrussel">
                    <Row style={{ width: "110px", height: '110px', border: "3px solid #fff", borderRadius: "50%", display: "grid", placeItems: "center" }}>
                        <img width="80" height="80" src="https://img.icons8.com/sf-ultralight/100/ffffff/bank-card-back-side.png" alt="bank-card-back-side" />
                    </Row>
                    <Row><Typography.Title level={2} style={{ color: "#fff", textAlign: 'center' }}>Crimes e Fraudes digitais</Typography.Title></Row>
                </div>
            </div>
            <div>
                <div className="box-carrussel">
                    <Row style={{ width: "110px", height: '110px', border: "3px solid #fff", borderRadius: "50%", display: "grid", placeItems: "center" }}>
                        <img width="80" height="80" src="https://img.icons8.com/sf-ultralight/100/ffffff/bank-card-back-side.png" alt="bank-card-back-side" />
                    </Row>
                    <Row><Typography.Title level={2} style={{ color: "#fff", textAlign: 'center' }}>Crimes e Fraudes digitais</Typography.Title></Row>
                </div>
            </div>
        </Row>
    )
}