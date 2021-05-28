import React from 'react'
import { CardDeck, Col, Container, Row } from 'react-bootstrap'
import PortfolioCard from '../components/PortfolioCard'

import style from '../styles/Portfolio.module.scss'

export default function Portfolio() {
    return (

            <main>

                <h1 className="second page-title">Portfolio</h1>
                <Container className={style.cardDeck}>
                <Row>
                    <Col className={style.contain}>
                        <PortfolioCard
                            img="/tuiscreen.png"
                            title="Tuiify"
                            bodyTxt="Tuiify has entirely been made by myself using React and Next.js."
                        />
                    </Col>
                    <Col className={style.contain}>
                        <PortfolioCard 
                            img="/fern.jpg"
                            title="Coming Soon"
                            bodyTxt="Projects currently under development will be displayed here very soon."
                        />
                    </Col>
                </Row>
                </Container>
            </main>


    )
}