import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';


import styles from '../styles/Header.module.css'



export default function HeaderSite() {
    return (

        <Navbar collapseOnSelect expand="sm" className={styles.marged}>
            <Navbar.Brand href="/">
                <Image src="/logoTuiifyV1small.svg" alt="Tuiify Logo" width={75} height={50} />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Nav fill defaultActiveKey="/home">
                    <Nav.Item>
                        <Link href="/" passHref>
                            <Nav.Link className={styles["hover-underline-animation"]}>Home</Nav.Link>
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link href="/about" passHref>
                            <Nav.Link className={styles["hover-underline-animation"]}>About</Nav.Link>
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link href="/services" passHref>
                            <Nav.Link className={styles["hover-underline-animation"]}>Services</Nav.Link>
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link href="/portfolio" passHref>
                            <Nav.Link className={styles["hover-underline-animation"]}>Portfolio</Nav.Link>
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link href="/contact" passHref>
                            <Nav.Link className={styles["hover-underline-animation"]}>Contact</Nav.Link>
                        </Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}
