import React, { useState } from 'react'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
import styles from '../styles/Feature.module.scss'

export default function Feature({img, credits, title, bodyTxt, rot, del}) {


    return (
        <Container className={`${styles.cont} col-8 col-lg-5 `} fluid="md">
            <Row className={`flex-row ${styles.row}`}>
                <Col className={`${styles.img}`}>
                    <motion.div initial={{ scale: 0 }} animate={{ rotate: rot, scale: 1 }}
                        transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: del 
                        }}>
                        <Image src={img} alt="code image" width={125} height={125} layout="fixed" />
                        <div className={styles.credits}>{credits}</div>
                    </motion.div>
                </Col>
                <Col className={styles.para}>
                    <h2>{title}</h2>
                    <p>{bodyTxt}</p>
                </Col>
            </Row>
        </Container>
    )
}
