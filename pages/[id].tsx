import { FC, useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';

import { getSingleCharacter, getEpisodes } from '../services/api';
import { ICard } from '../services/models/Default.interface';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

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

interface IEpisode {
  id: number
  name: string
}

interface IProps {
  data: ICard
}

const Home: FC<IProps> = ({data}) => {
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);

  useEffect(() => {
    async function getAllEpisodes() {
      let response: IEpisode[] = []

      await data.episode.forEach(async item => {
        const itemRes = await getEpisodes(item.split('/').pop());
        response.push(itemRes)
        if (response.length === data.episode.length) {
          setEpisodes(response)
        }
      })
    }
    getAllEpisodes();

    }, [])

  return (
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
                    <p className={styles.text}><strong>Episodes:</strong></p>
                    <ul className={styles.list}>
                      {episodes.map((item) => (
                        <li key={item.id} className={styles.text}>
                          {`${item.name},   `}
                        </li>
                      ))}
                    </ul>
                </div>
            </div>
  )
}

export default Home
