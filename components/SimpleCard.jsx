import React from 'react'
import { Card } from 'react-bootstrap'
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import Link from 'next/link';
import { motion } from 'framer-motion';

import style from '../styles/SimpleCard.module.scss'


export default function SimpleCard({ link, title, bodyTxt}) {


    return (
        <motion.li className={`${style["cardMotion"]}`} whileTap={{
            scale: 2,
            rotate: [0, 10, -10, 0]
            }} 
            whileHover={{
                position: 'relative',
                zIndex: 1,
                background: 'none',
                borderRadius: '5px',
                scale: 1.5,
                transition: {
                duration: .2
            }
        }}>
        <Link href={link} className={style.a}>
            <div className={style.card}>
                <Card className={`${style.card} "text-black"`}>

                        <Card.Title className={`${style.cardTitle} "text-white"`} >
                            {title} 
                            <span className={style.icon}>
                                <ArrowForwardRoundedIcon />  
                            </span>
                        </Card.Title>
                    
                        <Card.Text className={style.cardBody}>
                            {bodyTxt}
                        </Card.Text>
                </Card>
            </div>
        </Link>
        </motion.li>
    )
}
