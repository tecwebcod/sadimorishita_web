import { Image, Row } from 'antd'
import './style.css'

interface TitleProps {
    text: string | number
    textExtra?: string | number
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | undefined
    sizeImage?: string | undefined
    color?: string
}

export default function Titles({ text, direction, sizeImage, color, textExtra }: TitleProps) {
    return (
        <div className='titles'>
            <Row style={{ flexDirection: direction, alignItems: "center" }}>
                <div><Image style={{ width: sizeImage }} src='http://35.244.243.47/sm-barra_5.png'></Image></div>
                <Row style={{ gap: "10px" }}><h3 style={{ fontSize: "40px", color: "#838383" }}>{text}</h3> <h3 style={{ fontSize: "40px", color: color ?? "#838383" }}>{textExtra}</h3></Row>
            </Row>
        </div>
    )
}