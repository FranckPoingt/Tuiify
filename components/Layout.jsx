import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import HeaderSite from '../components/Header'


import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Layout.module.scss'


export default function Layout({ children }) {
    

    return (
        <div className={styles.container}>
            <Head>
                <title>Tuiify</title>
                <meta name="description" content="Tuiify the digital partner for your projects - NZ Based -Freelancing/Contracting/Available fulltime" />
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <HeaderSite />
            
            <main className={styles.main}>{children}</main>

                <footer className={styles.footer}>
                    &copy; Copyright 2021 - 
                    <span className={styles.footlogo}>
                        <Image src="/logoTuiifyV1small.svg" alt="Tuiify Logo" width={50} height={25} />
                    </span>
                    {/* - NZBN: 9429049357684 */}
                </footer>

        </div>
    )
}
