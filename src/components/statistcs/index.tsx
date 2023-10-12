import { Col, Row } from 'antd'
import './style.css'
import { FaClipboardList } from 'react-icons/fa'
import { PiUsersThreeFill } from 'react-icons/pi'
import { FaCalendarDays } from 'react-icons/fa6'
import { useEffect, useState } from 'react'

export default function StatistcsComponent() {
    const [soluctions, setSoluctions] = useState(0)
    const [clients, setClients] = useState(0)
    const [history, setHistory] = useState(0)

    useEffect(() => {
        let counter1 = 0;
        let counter2 = 0;
        let counter3 = 0;

        const interval = setInterval(() => {
            if (counter1 <= 14) {
                setSoluctions(counter1);
                counter1++;
            } else {
                clearInterval(interval);
            }
        }, 20);

        const interval2 = setInterval(() => {
            if (counter2 <= 302) {
                setClients(counter2);
                counter2++;
            } else {
                clearInterval(interval);
            }

        }, 20)
        const interval3 = setInterval(() => {
            if (counter3 <= 6) {
                setHistory(counter3);
                counter3++;
            } else {
                clearInterval(interval);
            }

        }, 20)

        console.log(soluctions)
        return () => {
            clearInterval(interval);
            clearInterval(interval2);
            clearInterval(interval3);
        };
    }, []);

    return (
        <Row className='container-statistcs'>
            <Col id='before' style={{ display: "grid", placeItems: 'center', width: "300px" }}>
                <Row><FaClipboardList color='#F3941E' size={45}></FaClipboardList></Row>
                <Row><h2 style={{ fontSize: "45px", color: "#808080" }}>+ {soluctions}</h2></Row>
                <Row><h3 style={{ fontSize: '25px' }}>Soluções específicas</h3></Row>
            </Col>
            <Col id='before' style={{ display: "grid", placeItems: 'center', width: "300px" }}>
                <Row><PiUsersThreeFill color='#F3941E' size={45}></PiUsersThreeFill></Row>
                <Row><h2 style={{ fontSize: "45px", color: "#808080" }}>+ {clients}</h2></Row>
                <Row><h3 style={{ fontSize: '25px' }}>de Clientes</h3></Row>
            </Col>
            <Col id='before' style={{ display: "grid", placeItems: 'center', width: "300px" }}>
                <Row><FaCalendarDays color='#F3941E' size={45}></FaCalendarDays></Row>
                <Row><h2 style={{ fontSize: "45px", color: "#808080" }}>+ {history}</h2></Row>
                <Row><h3 style={{ fontSize: '25px' }}>de História</h3></Row>
            </Col>
        </Row>
    )
}