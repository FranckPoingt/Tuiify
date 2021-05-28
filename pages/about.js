import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import style from '../styles/About.module.scss'

export default function About() {

    const greetingText = () => {
        const now = new Date();
        const currentHour = now.getHours();
            if (currentHour >= 12 && currentHour <=17) return "Good Afternoon"
            else if (currentHour >= 18) return "Good Evening"
            else return "Good Morning"
    }

    return (
        <main>
            <section id="top" className={`${style.sections} ${style.top}`}>
                <motion.div className={style.avatar} animate={{ scale: [2, 1] }} transition={{ duration: 0.5 }}>
                    <Image src="/bitmoji.png" alt="Avatar" width={225} height={225}/>
                </motion.div>
                <h1 className="second">{greetingText()}, I'm Franck,</h1>
                <h4>A fullstack developer and the human-being behind Tuiify.</h4>
            </section>
            <section id="first" className={style.sections}>
                    <p className={style.para}>Firstly, I would like to answer the question you might ask yourself: <br/>
                            <span className={style.question}>"Why Tuiify?!"</span> <br/>
                    Well, I ❤️ Tui! Their color palette is beautiful, and their voice is incredible! <br/>
                            Did you know that Tui have a complex variety of songs and calls, some of the wide range of Tui sounds are beyond the human register. <br/>
                            They also resemble parrots in their ability to clearly imitate human speech and were trained by Māori to replicate complex speech. Interesting Hey?! <br/>
                            And I was listening to Spotify while thinking for a name.
                    </p>
            </section>
            <section id="second" className={style.sections}>
                <p className={style.paraBis}>
                I'm Franck (with a "c"), <br/> I'm a 29 years old developer based in Auckland, New Zealand. <br/>
                I am originally from Lyon, France. <br/>
                I learned to code mostly on my own and dedicated full time to it. <br/>
                I  love being outside (mostly just to listen to Tui) and my main Hobby is Homebrewing. <br/>
                {/* Want to know a bit more about me ? Check my Resume <a href="https://frhazz.github.io/mysite/index.html" className={style.a} target="_blank">here</a>.  */}
                </p>
            </section>
            <section id="third" className={style.sections}>
                <p className={style.para}>Tuiify is my sole trader brand. <br/>
                Through this gateaway, I am available for Freelancing jobs, Temporary work but also open to fulltime positions. <br/>
                I am looking forward to work <b>FOR</b> and <b>WITH</b> you. <br/>
                <b>Cheers!</b> </p>
            </section>

        </main>
    )
}
