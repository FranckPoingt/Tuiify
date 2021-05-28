import React from 'react';
import { Card } from 'react-bootstrap';

import style from '../styles/PortfolioCard.module.scss'

export default function PortfolioCard({img ,title, bodyTxt}) {
    return (
        <Card style={{ width: '18rem' }} className={style.card}>
            <Card.Img variant="top" src={img} className={style.image}/>
            <Card.Body className={style.cardBody}>
                <Card.Title className={style.title}>{title}</Card.Title>
                <Card.Text>
                    {bodyTxt}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
