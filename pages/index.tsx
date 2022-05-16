import { FC, useState, useEffect } from 'react';
import { getAllCharacters, getPage } from '../services/api';
import { ICard, IInfo } from '../services/models/Default.interface';
import { Card } from '../components/card/Card';
import styles from '../styles/Home.module.scss';
import { getUA } from 'react-device-detect'

export async function getStaticProps() {
  try {
    const data = await getAllCharacters();

    if (!data) {
      return {
        props: {},
      };
    }

    return {
      props: {
        data,
      },
    };
  } catch (e) {
    return {
      props: { },
    };
  }
}

interface IPropsData {
  info: IInfo
  results: ICard[]
}
interface IProps {
  data: IPropsData
}


const Home: FC<IProps> = (props) => {
  const [cards, setCards] = useState<ICard[]>(props.data.results)
  const [info, setInfo] = useState<IInfo>(props.data.info)

  const getNewCards = async (id:string | null) => {
    if (typeof id !== null) {
      const data:IPropsData = await getPage(id?.charAt(id.length - 1 ))
      setCards(data.results);
      setInfo(data.info);
    }
  }

  const pattern = /.*(LinkedInApp|Messenger|Twitter|FBAN|FB_IAB).*/

  const isGoogleLoginAvailable = pattern.test(getUA)

  return (
    <>
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
      {/*{cards.map(item => (*/}
      {/*  <Card data={item} key={item.id} />*/}
      {/*))}*/}
    </div>
      <p>{getUA}</p>
      <p>{!isGoogleLoginAvailable && 'dupa1'}</p>
      <p>{isGoogleLoginAvailable && 'dupa2'}</p>
    {/*<div className={styles.pagination}>*/}
    {/*  <button className={styles.button} onClick={() => getNewCards(info.prev)} disabled={!info.prev}>Prev</button>*/}
    {/*  <button className={styles.button} onClick={() => getNewCards(info.next)} disabled={!info.next}>Next</button>*/}
    {/*</div>*/}
    </>
  )
}

export default Home
