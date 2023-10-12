import { Image, Row } from 'antd'
import './style.css'

interface TitleProps {
    text: string | number
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | undefined
    sizeImage?: string | undefined
}

export default function Titles({ text, direction, sizeImage }: TitleProps) {
    return (
        <Row className='titles'>
            <Row style={{ flexDirection: direction, alignItems: "center" }}>
                <div><Image style={{ width: sizeImage }} src='http://35.244.243.47/sm-barra_5.png'></Image></div>
                <div><h3 style={{ fontSize: "50px", color: "#838383" }}>{text}</h3></div>
            </Row>
        </Row>
    )
}