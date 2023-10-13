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
                <div className="box-carrussel"></div>
            </div>
            <div>
                <div className="box-carrussel"></div>
            </div>
            <div>
                <div className="box-carrussel"></div>
            </div>
            <div>
                <div className="box-carrussel"></div>
            </div>
            <div>
                <div className="box-carrussel"></div>
            </div>
            <div>
                <div className="box-carrussel"></div>
            </div>
            <div>
                <div className="box-carrussel"></div>
            </div>
            <div>
                <div className="box-carrussel"></div>
            </div>
            <div>
                <div className="box-carrussel"></div>
            </div>
        </Row>
    )
}