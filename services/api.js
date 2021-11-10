import axios from 'axios';
import { API_URL } from './config';


const get = (collection, id) => {
    console.log(collection)
  return axios
    .get(`${API_URL}/${collection}/${id || ''}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}

export const getAllCharacters = () => get('character');
export const getSingleCharacter = (id) => get('character' , id);

export const getAllEpisodes = () => get('episode');
export const getSingleEpisode = (id) => get('episode' , id);

export const getAllLocations = () => get('location');
export const getSingleLocation= (id) => get('location' , id);



