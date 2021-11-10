import { FC } from 'react';
import { GetServerSideProps } from 'next';

import { getSingleCharacter } from '../services/api';
import { ICard } from '../services/models/Default.interface';
import Image from 'next/image';
import styles from '../components/card/Card.module.scss';

export const getServerSideProps: GetServerSideProps = async (context) => {
    if (context.params) {
        const { id } = context.params;

        const data = await getSingleCharacter(id);

        return {
          props: {
            data,
            },
        };
    }
    return {
        props: {}
    }
  };

interface IProps {
  data: ICard
}

const Home: FC<IProps> = ({data}) => {
  return (
    <div>
      <div className={styles.card}>
                <div className={styles.imageWrapper}>
                    <Image src={data.image} alt='' layout='fill'  />
                </div>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>{data.name}</h2>
                    <p className={styles.text}><strong>Status:</strong> {data.status}</p>
                    <p className={styles.text}><strong>Species:</strong> {data.species}</p>
                    <p className={styles.text}><strong>Origin:</strong> {data.origin.name}</p>
                    <p className={styles.text}><strong>Last known location:</strong> {data.location.name}</p>
                </div>
            </div>
    </div>
  )
}

export default Home
