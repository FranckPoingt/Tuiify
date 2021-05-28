import React from 'react'
import Image from 'next/image'
import { Container, Col, Row } from 'react-bootstrap'
import style from '../styles/Services.module.scss'

export default function Services() {
    return (
        <main>
            <div className="page-title">
                <h1 className="second">Services</h1>
                
            </div>
                    <Container className={style.cont}>
                        <Row>
                            <h2>DESIGN </h2>
                        </Row>
                        <Row>
                            <h4>We design, together, a beautiful app matching your needs and expectations.</h4>
                        </Row>
                        <Row>
                            <p>You already know what you are looking for? <br/> Let's jump straight to development!</p>
                        </Row>
                    </Container>
                    <Container className={style.cont}>
                        <Row>
                            <h2>DEVELOPMENT</h2>
                        </Row>
                        <Row>
                            <h4>After defining your design, it's time to develop it.</h4>
                            <p>Responsive Front-end, Back-end to access your data, Authentication, Mobile...</p>
                        </Row>
                        <div className={style.dev}>
                        <Row className="row-cols-auto">
                            <Col className="col-lg-3 text-center">
                            <Row className={style.imgRow}>
                                <Image src="/responsive.svg" alt="code image" width={100} height={100} />
                            </Row>
                                <Row className={style.creditRow}>
                                    <div className={style.credits}>Icons made by <a href="https://www.flaticon.com/authors/flat-icons" title="Flat Icons" className={style.credits}>Flat Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon" className={style.credits}>www.flaticon.com</a></div>                                
                                </Row>
                                <Row>
                                    <h5>From sketch to a responsive Website</h5>
                                </Row>
                                <Row>
                                    <p>Building the interface of your website (Front-End), static or dynamic using React.js.</p>
                                </Row>
                            </Col>
                            <Col className="col-lg-3 text-center">
                            <Row className={style.imgRow}>
                                <Image src="/api.svg" alt="code image" width={100} height={100} />
                            </Row>
                                <Row className={style.creditRow}>
                                    <div className={style.credits}>Icons made by <a className={style.credits} href="https://www.flaticon.com/authors/icon-pond" title="Icon Pond">Icon Pond</a> from <a href="https://www.flaticon.com/" title="Flaticon" className={style.credits}>www.flaticon.com</a></div>
                                </Row>
                                <Row>
                                    <h5>From DATA to RESTful API</h5>
                                </Row>
                                <Row>
                                    <p>Do you have an existing database ? <br/> Do you need one ? <br/> SQL or No SQL ? <br/>
                                    I can create your relational model and then build and secure your Back-End using Node.js or Java (Spring).
                                    </p>
                                </Row>
                            </Col>
                            <Col className="col-lg-3 text-center">
                                <Row className={style.imgRow}>
                                    <Image src="/shop.svg" alt="code image" width={100} height={100} />
                                </Row>
                                <Row className={style.creditRow}>
                                    <div className={style.credits}>Icons made by <a href="https://www.freepik.com" title="Freepik" className={style.credits}>Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" className={style.credits}>www.flaticon.com</a></div>                                
                                </Row>
                                <Row>
                                    <h5>E-Commerce solution</h5>
                                </Row>
                                <Row>
                                    <p>Bringing your shop online with Shopify. <br/> Designing and/or setting up your Shopify platform to start selling more products online easy peasy.<br/> If you need something more custom we can use Commerce.js</p>
                                </Row>
                            </Col>
                            <Col className="col-lg-3 text-center">
                            <Row className={style.imgRow}>
                                <Image src="/engineering.svg" alt="code image" width={100} height={100} />
                            </Row>
                                <Row className={style.creditRow}>
                                    <div className={style.credits}>Icons made by <a href="https://www.flaticon.com/authors/becris" title="Becris" className={style.credits}>Becris</a> from <a href="https://www.flaticon.com/" title="Flaticon" className={style.credits}>www.flaticon.com</a></div>                                </Row>
                                <Row>
                                    <h5>A fully functionnal App</h5>
                                </Row>
                                <Row>
                                    <p>The whole shebang ! <br/> Front-End + Back-End for a complete solution that fullfills your needs and even more.</p>
                                </Row>
                            </Col>
                        </Row>
                        </div>
                    </Container>
                    <Container className={style.cont}>
                        <Row>
                            <h2>DEPLOYEMENT</h2>
                        </Row>
                        <Row>
                            <h4>I can help you decide, where would be the best place to host your app and what the possibilities are.</h4>
                        </Row>
                    </Container>
                    <Container className={style.cont}>
                        <Row>
                            <h2>MAINTENANCE</h2>
                        </Row>
                        <Row>
                            <h4>Because your app needs to last in time and evolve with new technologies.</h4>
                        </Row>
                        <Row>
                            <p>I won't let you down after the first build, we can set up a plan to keep your app fit and add new features to it.</p>
                        </Row>
                    </Container>
        </main>
    )
}