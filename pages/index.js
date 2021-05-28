import React from 'react'
import Image from 'next/image'
import SimpleCard from '../components/SimpleCard';
import { Col, Container, Row } from 'react-bootstrap';
import styles from '../styles/Home.module.scss';
import Feature from '../components/Feature';

export default function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.top}>
        <h1 className={styles.title}>
          Welcome to
          <span className={styles.logo}>
            <Image src="/logoTuiifyV1small.svg" alt="Tuiify Logo" width={200} height={100} />
          </span>
        </h1>
        <span>The Digital Partner that gives voice to your Projects.</span>
      </div>
      <section className={styles.feature}>
        <Feature 
          img="/code.svg"
          credits={<div className={styles.credits}>Icons made by <a className={styles.credits} href="https://www.freepik.com" title="Freepik">Freepik</a> from <a className={styles.credits} href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>}
          title="Clean code"
          bodyTxt="Ease the maintenance of your website"
          rot={360}
          del={0}
        />
        <Feature 
          img="/browser.svg"
          credits=""
          title="Control"
          bodyTxt="Keep total control on your Website/Webapp by letting me code it from scratch using Next.js, React, Node.js or Java, SQL or NoSQL"
          rot={-360}
          del={.5}
        />
        <Feature 
          img="/knowledge.svg"
          credits={<div className={styles.credits}>Icons made by <a className={styles.credits} href="https://www.flaticon.com/authors/surang" title="surang">surang</a> from <a className={styles.credits} href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>}
          title="Expertise"
          bodyTxt="Together, we will find the most suitable solution to your needs"
          rot={360}
          del={1}
        />
        <Feature 
          img="/schedule.svg"
          credits={<div className={styles.credits}>Icons made by <a className={styles.credits} href="https://www.freepik.com" title="Freepik">Freepik</a> from <a className={styles.credits} href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>}
          title="Deadline"
          bodyTxt="Because your time is precious, meeting the deadline is something that matters"
          rot={-360}
          del={1.5}
        />
      </section>
      <Container>
        <div className={styles.cards}>
          <ul className="card-list d-grid">
            <Row>
              <Col>
                  <SimpleCard
                    link={"about"}
                    title={"About"}
                    bodyTxt={"Who's behind Tuiify?"} />
              </Col>
              <Col>
                  <SimpleCard
                    link={"services"}
                    title={"Services"}
                    bodyTxt={"Explore your possibilities."} />
              </Col>
              <Col>
                  <SimpleCard
                    link={"portfolio"}
                    title={"Portfolio"}
                    bodyTxt={"Have a look!"} />
              </Col>
              <Col>
                  <SimpleCard
                    link={"contact"}
                    title={"Contact"}
                    bodyTxt={"Let's talk!"} />
              </Col>
            </Row>
          </ul>
        </div>
      </Container>
    </main>
  )
}
