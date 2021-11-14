import React, { FC } from 'react';
import Link from 'next/link';
import { ICard } from '../../services/models/Default.interface';
import styles from './Card.module.scss'

import Image from 'next/image';

interface IProps {
    data: ICard
}

export const Card: FC<IProps> = ({data}) => {
    return (
        <Link href={`/${data.id}`} passHref>
            <div className={styles.card}>
                <div className={styles.imageWrapper}>
                    <Image priority src={data.image} alt='' layout='fill'  />
                </div>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>{data.name}</h2>
                    <p className={styles.text}><strong>Status:</strong> {data.status}</p>
                    <p className={styles.text}><strong>Species:</strong> {data.species}</p>
                    <p className={styles.text}><strong>Origin:</strong> {data.origin.name}</p>
                    <p className={styles.text}><strong>Last known location:</strong> {data.location.name}</p>
                </div>
            </div>
        </Link>
    )
}