import { FC } from 'react';
import { getAllCharacters } from '../services/api';
import { ICard, IInfo } from '../services/models/Default.interface';
import { Card } from '../components/card/Card';

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
interface IProps {
  data: {
    info: IInfo
    results: ICard[]
  }
}


const Home: FC<IProps> = (props) => {
  return (
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
      {props.data.results.map(item => (
        <Card data={item} key={item.id} />
      ))}
    </div>
  )
}

export default Home
